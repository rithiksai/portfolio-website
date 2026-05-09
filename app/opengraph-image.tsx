import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#ece8de',
          color: '#1c1916',
          border: '8px solid #1c1916',
          padding: '48px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, letterSpacing: '0.24em' }}>
          <span>RITHIK·SAI</span>
          <span>ENGINEER / AI / iOS</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 152, fontWeight: 900, lineHeight: 0.85, letterSpacing: '-0.06em' }}>
            R<span style={{ color: '#d83a2a' }}>I</span>THIK<br />S<span style={{ color: '#d83a2a', fontStyle: 'italic' }}>A</span>I
          </div>
          <div style={{ fontSize: 32, letterSpacing: '0.08em' }}>BUILDING ON-DEVICE INTELLIGENCE FOR APPLE PLATFORMS.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ width: 72, height: 72, borderRadius: '9999px', background: '#d83a2a' }} />
          <div style={{ fontSize: 28, letterSpacing: '0.18em' }}>ZEN KAKU GOTHIC NEW × JETBRAINS MONO</div>
        </div>
      </div>
    ),
    size,
  );
}
