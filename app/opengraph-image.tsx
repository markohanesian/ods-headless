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
          background: '#09090b', // zinc-950
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          flexDirection: 'column',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'black',
            borderRadius: '100%',
            width: 300,
            height: 300,
            marginBottom: 40,
            fontSize: 200,
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          O
        </div>
        <div style={{ 
          fontSize: 60, 
          letterSpacing: '-0.05em', 
          fontWeight: 700,
          textTransform: 'uppercase'
        }}>
          Ohanesian
        </div>
        <div style={{ 
          fontSize: 24, 
          letterSpacing: '0.4em', 
          color: '#71717a', // zinc-400
          marginTop: 10,
          textTransform: 'uppercase'
        }}>
          Digital Solutions
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
