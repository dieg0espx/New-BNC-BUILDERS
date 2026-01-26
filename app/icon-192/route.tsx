import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#CF9C39',
          borderRadius: 32,
        }}
      >
        <svg
          width="140"
          height="70"
          viewBox="0 0 140 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* B */}
          <path
            d="M0 0H20C28 0 34 4 34 12C34 18 30 22 24 24C31 26 36 32 36 40C36 52 28 60 18 60H0V0ZM18 22C24 22 28 18 28 12C28 6 24 4 18 4H8V22H18ZM20 56C28 56 34 50 34 40C34 32 28 28 20 28H8V56H20Z"
            fill="#191B1E"
          />
          {/* N */}
          <path
            d="M44 0H56L76 36V0H84V60H72L52 22V60H44V0Z"
            fill="#191B1E"
          />
          {/* C */}
          <path
            d="M96 30C96 12 110 0 128 0C142 0 152 8 156 18H144C141 12 136 8 128 8C114 8 106 20 106 30C106 40 114 52 128 52C136 52 141 48 144 42H156C152 52 142 60 128 60C110 60 96 48 96 30Z"
            fill="#191B1E"
            transform="translate(-10, 5) scale(0.9)"
          />
        </svg>
      </div>
    ),
    {
      width: 192,
      height: 192,
    }
  );
}
