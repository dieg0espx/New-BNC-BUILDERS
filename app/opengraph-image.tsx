import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'BNC Builders Inc. - Home Remodeling in Escondido, CA';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#CF9C39',
          position: 'relative',
        }}
      >
        {/* Gold accent bar at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: '#191B1E',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            padding: '60px 80px',
          }}
        >
          {/* BNC Logo Text */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 30,
            }}
          >
            <svg
              width="200"
              height="80"
              viewBox="0 0 200 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H30C40 0 48 5 48 17.5C48 25 44 30 37.5 32.5C45 35 50 41 50 51.5C50 66.5 40 75 27.5 75H0V0ZM27.5 27.5C32.5 27.5 35 24.5 35 19.5C35 14.5 32.5 11.5 27.5 11.5H13V27.5H27.5ZM28.5 63.5C35.5 63.5 40 59 40 51C40 43 35.5 38.5 28.5 38.5H13V63.5H28.5Z"
                fill="#191B1E"
              />
              <path
                d="M65 0H80L102 35V0H115V75H100L78 37.5V75H65V0Z"
                fill="#191B1E"
              />
              <path
                d="M135 37.5C135 16.5 150 0 172.5 0C187.5 0 198 7.5 202 18.5H188C185 12.5 180 9 172.5 9C157.5 9 150 22 150 37.5C150 53 157.5 66 172.5 66C180 66 185 62.5 188 56.5H202C198 67.5 187.5 75 172.5 75C150 75 135 58.5 135 37.5Z"
                fill="#191B1E"
                transform="translate(-5, 0) scale(0.95)"
              />
            </svg>
          </div>

          {/* Company Name */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: '#191B1E',
              marginBottom: 16,
              textAlign: 'center',
            }}
          >
            BUILDERS INC.
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: '#191B1E',
              marginBottom: 40,
              textAlign: 'center',
              fontWeight: 500,
            }}
          >
            We Build & Remodel Homes With Peace Of Mind!
          </div>

          {/* Divider */}
          <div
            style={{
              width: 120,
              height: 3,
              backgroundColor: '#191B1E',
              marginBottom: 40,
            }}
          />

          {/* Services */}
          <div
            style={{
              display: 'flex',
              gap: 40,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {['Kitchen Remodeling', 'Bathroom Remodeling', 'ADU Construction', 'Outdoor Kitchens'].map(
              (service) => (
                <div
                  key={service}
                  style={{
                    fontSize: 20,
                    color: '#191B1E',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      backgroundColor: '#191B1E',
                      borderRadius: '50%',
                    }}
                  />
                  {service}
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom bar with contact info */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 80px',
            backgroundColor: 'rgba(25, 27, 30, 0.1)',
            borderTop: '1px solid rgba(25, 27, 30, 0.3)',
          }}
        >
          <div
            style={{
              fontSize: 22,
              color: '#191B1E',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#191B1E"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            (760) 993-3204
          </div>
          <div style={{ fontSize: 20, color: '#191B1E' }}>
            Escondido, CA | 30+ Years Experience | 900+ Projects
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
