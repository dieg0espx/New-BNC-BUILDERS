// BNC Builders - Reusable OG Image Generator
// Used by route-level opengraph-image.tsx files

import { ImageResponse } from 'next/og';

const SIZE = { width: 1200, height: 630 };

interface OGImageOptions {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export function generateOGImage({ title, subtitle, backgroundImage }: OGImageOptions) {
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
        {/* Background photo */}
        <img
          src={backgroundImage}
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
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.75) 100%)',
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

          {/* Page title */}
          <div
            style={{
              fontSize: 52,
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: subtitle ? 12 : 20,
              maxWidth: 900,
            }}
          >
            {title}
          </div>

          {subtitle && (
            <div
              style={{
                fontSize: 22,
                fontWeight: 400,
                color: 'rgba(255,255,255,0.85)',
                marginBottom: 20,
                maxWidth: 800,
              }}
            >
              {subtitle}
            </div>
          )}

          {/* Bottom branding */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginTop: 8,
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: '#CF9C39' }}>
              BNC Builders Inc.
            </div>
            <div style={{ width: 1, height: 20, backgroundColor: 'rgba(255,255,255,0.3)' }} />
            <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)' }}>
              (760) 658-6238
            </div>
            <div style={{ width: 1, height: 20, backgroundColor: 'rgba(255,255,255,0.3)' }} />
            <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)' }}>
              Escondido, CA
            </div>
          </div>
        </div>
      </div>
    ),
    { ...SIZE }
  );
}

export const ogImageSize = SIZE;
