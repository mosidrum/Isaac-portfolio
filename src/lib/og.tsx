import { ImageResponse } from 'next/og';
import { siteUrl } from '@/data/site';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

const loadFont = async (): Promise<ArrayBuffer | null> => {
  try {
    const cssResponse = await fetch('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700', {
      headers: {
        // An old user agent makes Google Fonts return TTF/WOFF, which satori can parse (not WOFF2).
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'
      }
    });
    const css = await cssResponse.text();
    const resource = css.match(/src: url\(([^)]+)\) format\('(woff|opentype|truetype)'\)/);
    if (!resource) return null;
    const fontResponse = await fetch(resource[1]);
    return fontResponse.status === 200 ? await fontResponse.arrayBuffer() : null;
  } catch {
    // Offline or blocked: fall back to the default font instead of failing the build.
    return null;
  }
};

interface OgInput {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export const renderOg = async ({ eyebrow, title, subtitle }: OgInput) => {
  const font = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#05070a',
          padding: '64px 72px',
          fontFamily: font ? '"Space Grotesk"' : 'sans-serif'
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#5b8ef4'
          }}
        >
          {eyebrow}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              fontSize: title.length > 28 ? 68 : 88,
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: '#ffffff'
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 30,
              lineHeight: 1.45,
              color: '#9aa4ad',
              maxWidth: 940
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: 24,
            fontSize: 22,
            color: '#7d8a93'
          }}
        >
          <div style={{ display: 'flex' }}>{siteUrl.replace(/^https?:\/\//, '')}</div>
          <div style={{ display: 'flex' }}>Isaac Ayodele</div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: font ? [{ name: 'Space Grotesk', data: font, weight: 700 }] : undefined
    }
  );
};
