// BNC Builders - Reusable OG Image Generator
// Logo-forward design with page title and branding

import { ImageResponse } from 'next/og';

const SIZE = { width: 1200, height: 630 };
const LOGO_URL = 'https://res.cloudinary.com/dku1gnuat/image/upload/q_auto,f_png/v1767035998/BNC-BUILDERS/images_brand_logo-dark.2505220829365.png';

interface OGImageOptions {
  title: string;
  subtitle?: string;
}

export function generateOGImage({ title, subtitle }: OGImageOptions) {
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
          backgroundColor: '#FFFFFF',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Gold top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            backgroundColor: '#CF9C39',
          }}
        />

        {/* Logo image */}
        <img
          src={LOGO_URL}
          width={380}
          height={190}
          style={{
            marginBottom: 32,
            objectFit: 'contain',
          }}
        />

        {/* Page title */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: '#1a1a1a',
            textAlign: 'center',
            maxWidth: 900,
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>

        {subtitle && (
          <div
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: '#6B7280',
              textAlign: 'center',
              maxWidth: 800,
              marginTop: 10,
            }}
          >
            {subtitle}
          </div>
        )}

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 56,
            backgroundColor: '#1a1a1a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 32,
          }}
        >
          <div style={{ fontSize: 18, fontWeight: 700, color: '#CF9C39' }}>
            (760) 658-6238
          </div>
          <div style={{ width: 1, height: 20, backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)' }}>
            Escondido, CA
          </div>
          <div style={{ width: 1, height: 20, backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)' }}>
            Licensed &amp; Insured
          </div>
        </div>
      </div>
    ),
    { ...SIZE }
  );
}

export const ogImageSize = SIZE;
