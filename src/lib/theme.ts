export type Theme = 'light' | 'dark';

export const getTheme = (): Theme => {
  const attr = document.documentElement.dataset.theme;
  if (attr === 'light' || attr === 'dark') return attr;
  return globalThis.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export const setTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // Storage can be blocked; the theme still applies for this page view.
  }
};

export const toggleTheme = (): Theme => {
  const next = getTheme() === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
};
