'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { calendlyUrl, email, githubUrl, linkedinUrl, projects, resumeUrl } from '@/data';
import { ask } from '@/lib/ask';
import { toggleTheme } from '@/lib/theme';
import type { BlogMeta } from '@/lib/blog';
import styles from './CommandPalette.module.css';

interface Item {
  id: string;
  group: string;
  label: string;
  hint?: string;
  keywords?: string;
  run: () => void;
}

const isTypingTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable
  );
};

export const CommandPalette = ({ posts }: { posts: BlogMeta[] }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [notice, setNotice] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActive(0);
    setNotice('');
  }, []);

  const items = useMemo<Item[]>(() => {
    const go = (href: string) => () => {
      close();
      router.push(href);
    };
    const external = (href: string) => () => {
      close();
      globalThis.open(href, '_blank', 'noopener,noreferrer');
    };

    const pages: Item[] = [
      ['Home', '/'],
      ['Work', '/projects'],
      ['Experience', '/#experience'],
      ['Writing', '/blogs'],
      ['Tools I use', '/uses'],
      ['Résumé (on this site)', '/resume'],
      ['Contact', '/#contact']
    ].map(([label, href]) => ({ id: `page-${href}`, group: 'Go to', label, run: go(href) }));

    const work: Item[] = projects.map((p) => ({
      id: `project-${p.slug}`,
      group: 'Work',
      label: p.title,
      hint: p.category,
      keywords: `${p.techStack.join(' ')} ${p.description}`,
      run: go(`/projects/${p.slug}`)
    }));

    const writing: Item[] = posts.map((p) => ({
      id: `post-${p.slug}`,
      group: 'Writing',
      label: p.title,
      hint: p.readTime,
      keywords: p.tags.join(' '),
      run: go(`/blogs/${p.slug}`)
    }));

    const actions: Item[] = [
      {
        id: 'act-email',
        group: 'Actions',
        label: 'Email Isaac',
        hint: email,
        keywords: 'contact hire',
        run: () => {
          close();
          globalThis.location.href = `mailto:${email}`;
        }
      },
      {
        id: 'act-copy',
        group: 'Actions',
        label: 'Copy email address',
        hint: email,
        run: () => {
          navigator.clipboard
            .writeText(email)
            .then(() => setNotice('Email copied to clipboard'))
            .catch(() => setNotice(email));
        }
      },
      { id: 'act-call', group: 'Actions', label: 'Book a call', hint: 'Calendly', run: external(calendlyUrl) },
      { id: 'act-cv', group: 'Actions', label: 'Download résumé (PDF)', hint: 'Google Drive', run: external(resumeUrl) },
      { id: 'act-gh', group: 'Actions', label: 'GitHub', hint: 'mosidrum', run: external(githubUrl) },
      { id: 'act-li', group: 'Actions', label: 'LinkedIn', run: external(linkedinUrl) },
      {
        id: 'act-theme',
        group: 'Actions',
        label: 'Toggle light / dark theme',
        keywords: 'theme dark light mode',
        run: () => {
          toggleTheme();
          close();
        }
      }
    ];

    return [...pages, ...work, ...writing, ...actions];
  }, [close, posts, router]);

  const trimmed = query.trim();
  const askMode = trimmed.startsWith('?');
  const matches = useMemo(() => {
    if (!trimmed || askMode) return trimmed ? [] : items;
    const tokens = trimmed.toLowerCase().split(/\s+/);
    return items.filter((item) => {
      const haystack = `${item.label} ${item.hint ?? ''} ${item.keywords ?? ''}`.toLowerCase();
      return tokens.every((t) => haystack.includes(t));
    });
  }, [askMode, items, trimmed]);

  const showAnswer = Boolean(trimmed) && (askMode || matches.length === 0);
  const answer = showAnswer ? ask(askMode ? trimmed.slice(1) : trimmed) : null;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      } else if (event.key === '/' && !isTypingTarget(event.target) && !event.metaKey) {
        event.preventDefault();
        setOpen(true);
      }
    };
    const onOpen = () => setOpen(true);
    document.addEventListener('keydown', onKey);
    globalThis.addEventListener('open-command-palette', onOpen);
    return () => {
      document.removeEventListener('keydown', onKey);
      globalThis.removeEventListener('open-command-palette', onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return () => {};
    const previouslyFocused = document.activeElement as HTMLElement | null;
    inputRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [open]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  if (!open) return null;

  const onKeyDown = (event: React.KeyboardEvent) => {
    const count = matches.length;
    switch (event.key) {
      case 'Escape': {
        close();
        break;
      }
      case 'ArrowDown': {
        event.preventDefault();
        setActive((i) => (count > 0 ? (i + 1) % count : 0));
        break;
      }
      case 'ArrowUp': {
        event.preventDefault();
        setActive((i) => (count > 0 ? (i - 1 + count) % count : 0));
        break;
      }
      case 'Enter': {
        event.preventDefault();
        if (!showAnswer) matches[active]?.run();
        break;
      }
      case 'Tab': {
        event.preventDefault();
        break;
      }
      default:
    }
  };

  let lastGroup = '';

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className={styles.panel} role="dialog" aria-modal="true" aria-label="Command palette">
        <input
          ref={inputRef}
          className={styles.input}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
            setNotice('');
          }}
          placeholder="Search, or type ? to ask about Isaac…"
          aria-label="Search or ask a question"
          role="combobox"
          aria-expanded={!showAnswer}
          aria-controls="palette-list"
          aria-activedescendant={!showAnswer && matches[active] ? `opt-${matches[active].id}` : undefined}
          onKeyDown={onKeyDown}
          autoComplete="off"
          spellCheck={false}
        />

        <div className={styles.body} ref={listRef}>
          {answer ? (
            <div className={styles.answer} aria-live="polite">
              <p className={styles.answerLabel}>Ask Isaac</p>
              <p className={styles.answerText}>{answer.text}</p>
              <div className={styles.answerLinks}>
                {answer.links.map((link) => (
                  <Link key={link.href} href={link.href} className={styles.answerLink} onClick={close}>
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div id="palette-list" role="listbox" aria-label="Results">
              {matches.map((item, index) => {
                const heading = item.group === lastGroup ? null : item.group;
                lastGroup = item.group;
                return (
                  <div key={item.id}>
                    {heading && <p className={styles.group}>{heading}</p>}
                    <div
                      id={`opt-${item.id}`}
                      role="option"
                      aria-selected={index === active}
                      data-index={index}
                      tabIndex={-1}
                      className={`${styles.option} ${index === active ? styles.optionActive : ''}`}
                      onMouseEnter={() => setActive(index)}
                      onClick={item.run}
                    >
                      <span>{item.label}</span>
                      {item.hint && <span className={styles.hint}>{item.hint}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <span>{notice || '↑↓ navigate · Enter select · Esc close'}</span>
          <span>⌘K</span>
        </div>
      </div>
    </div>
  );
};
