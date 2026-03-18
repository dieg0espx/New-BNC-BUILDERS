import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'BNC Builders Inc. - Home Remodeling in Escondido & San Diego';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Background project photo */}
        <img
          src="https://res.cloudinary.com/dku1gnuat/image/upload/w_1200,h_630,c_fill,q_80/v1767035994/BNC-BUILDERS/images_kitchen-remodel.2505221027173.jpg"
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Dark gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            height: '100%',
            padding: '60px',
            zIndex: 1,
          }}
        >
          {/* Gold accent line */}
          <div
            style={{
              width: 80,
              height: 4,
              backgroundColor: '#CF9C39',
              marginBottom: 20,
            }}
          />

          {/* Company name */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.1,
              marginBottom: 8,
            }}
          >
            BNC Builders Inc.
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: '#CF9C39',
              marginBottom: 24,
            }}
          >
            Transforming San Diego Homes With Expert Craftsmanship
          </div>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              gap: 40,
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#CF9C39' }}>900+</div>
              <div style={{ fontSize: 16, color: '#FFFFFF', opacity: 0.9 }}>Projects</div>
            </div>
            <div style={{ width: 1, height: 24, backgroundColor: 'rgba(255,255,255,0.3)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#CF9C39' }}>30+</div>
              <div style={{ fontSize: 16, color: '#FFFFFF', opacity: 0.9 }}>Years Experience</div>
            </div>
            <div style={{ width: 1, height: 24, backgroundColor: 'rgba(255,255,255,0.3)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#CF9C39' }}>5.0</div>
              <div style={{ fontSize: 16, color: '#FFFFFF', opacity: 0.9 }}>Star Rating</div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
