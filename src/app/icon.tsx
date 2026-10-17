import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

const Icon = () =>
  new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000000',
          color: '#5b8ef4',
          fontSize: 34,
          fontWeight: 700,
          borderRadius: 12
        }}
      >
        IA
      </div>
    ),
    size
  );

export default Icon;
