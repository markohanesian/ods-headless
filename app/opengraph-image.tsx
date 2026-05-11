import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Ohanesian Digital Solutions';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '8px solid white',
            borderRadius: '100%',
            width: 240,
            height: 240,
            marginBottom: 40,
          }}
        >
          O
        </div>
        <div style={{ fontSize: 48, letterSpacing: '-0.05em', fontWeight: 'bold' }}>
          OHANESIAN DIGITAL SOLUTIONS
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
