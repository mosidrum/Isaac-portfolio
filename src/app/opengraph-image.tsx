import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Isaac Ayodele — Full-Stack Engineer · AI Systems';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function loadGoogleFont(font: string, weight: number) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}`;
  const css = await (
    await fetch(url, {
      headers: {
        // An old user agent makes Google Fonts return WOFF/TTF instead of WOFF2 — satori (which
        // ImageResponse uses) can parse WOFF/TTF/OTF, but not WOFF2.
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'
      }
    })
  ).text();

  const resource = css.match(/src: url\(([^)]+)\) format\('(woff|opentype|truetype)'\)/);
  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status === 200) {
      return response.arrayBuffer();
    }
  }

  throw new Error(`Failed to load font data for ${font}`);
}

export default async function OgImage() {
  const spaceGroteskBold = await loadGoogleFont('Space+Grotesk', 700);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#080c0e',
          padding: '72px 80px',
          fontFamily: '"Space Grotesk", sans-serif'
        }}
      >
        {/* Top label */}
        <div
          style={{
            fontSize: 13,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#6b7280',
            display: 'flex'
          }}
        >
          FULL-STACK ENGINEER · AI SYSTEMS · REMOTE
        </div>

        {/* Center content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              color: '#e8ecef',
              display: 'flex'
            }}
          >
            Isaac Ayodele
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 400,
              color: '#6b7280',
              lineHeight: 1.6,
              maxWidth: 700,
              display: 'flex'
            }}
          >
            Shipping production software for 5+ years. Currently building AI agent infrastructure at Relaystack.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: 24
          }}
        >
          <div style={{ fontSize: 13, color: '#374151', letterSpacing: '0.04em', display: 'flex' }}>
            isaacayodele.netlify.app
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#6b7280' }} />
            <div style={{ fontSize: 12, color: '#6b7280', letterSpacing: '0.08em', display: 'flex' }}>
              OPEN TO REMOTE ROLES
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Space Grotesk',
          data: spaceGroteskBold,
          weight: 700
        }
      ]
    }
  );
}
