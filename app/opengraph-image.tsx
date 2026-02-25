import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'BNC Builders Inc. - Home Remodeling in Escondido, CA';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#CF9C39',
          position: 'relative',
        }}
      >
        {/* Subtle pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 40,
            zIndex: 1,
          }}
        >
          {/* BNC Text Logo */}
          <div
            style={{
              display: 'flex',
              fontSize: 140,
              fontWeight: 900,
              color: '#191B1E',
              letterSpacing: '-0.05em',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            BNC
          </div>

          {/* BUILDERS INC */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: '#191B1E',
              letterSpacing: '0.15em',
              marginTop: -20,
            }}
          >
            BUILDERS INC.
          </div>

          {/* Divider */}
          <div
            style={{
              width: 200,
              height: 4,
              backgroundColor: '#191B1E',
              marginTop: 10,
              marginBottom: 10,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: '#191B1E',
              textAlign: 'center',
              maxWidth: 900,
            }}
          >
            Transforming San Diego Homes With Expert Craftsmanship
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: 80,
              marginTop: 30,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: 48, fontWeight: 800, color: '#191B1E' }}>
                900+
              </div>
              <div style={{ fontSize: 20, color: '#191B1E', opacity: 0.8 }}>
                Projects
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: 48, fontWeight: 800, color: '#191B1E' }}>
                30+
              </div>
              <div style={{ fontSize: 20, color: '#191B1E', opacity: 0.8 }}>
                Years Experience
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            backgroundColor: 'rgba(25, 27, 30, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 60px',
          }}
        >
          <div
            style={{
              fontSize: 26,
              color: '#CF9C39',
              fontWeight: 600,
            }}
          >
            (760) 993-3204
          </div>
          <div
            style={{
              fontSize: 22,
              color: '#FFFFFF',
            }}
          >
            Escondido, CA • Licensed & Insured
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
