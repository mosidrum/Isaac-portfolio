import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Isaac Ayodele — Full-Stack Engineer · AI Systems';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage() {
  const spaceGroteskBold = await fetch(
    'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gowFY2ZEg.woff2'
  ).then((r) => r.arrayBuffer());

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
