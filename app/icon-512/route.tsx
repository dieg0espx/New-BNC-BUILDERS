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
          borderRadius: 64,
        }}
      >
        <svg
          width="380"
          height="180"
          viewBox="0 0 200 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* B */}
          <path
            d="M0 0H30C40 0 48 5 48 17.5C48 25 44 30 37.5 32.5C45 35 50 41 50 51.5C50 66.5 40 75 27.5 75H0V0ZM27.5 27.5C32.5 27.5 35 24.5 35 19.5C35 14.5 32.5 11.5 27.5 11.5H13V27.5H27.5ZM28.5 63.5C35.5 63.5 40 59 40 51C40 43 35.5 38.5 28.5 38.5H13V63.5H28.5Z"
            fill="#191B1E"
          />
          {/* N */}
          <path
            d="M60 0H76L100 40V0H113V75H97L73 32V75H60V0Z"
            fill="#191B1E"
          />
          {/* C */}
          <path
            d="M125 37.5C125 16.5 142 0 167 0C184 0 196 8 200 20H185C182 13 176 9 167 9C150 9 140 22 140 37.5C140 53 150 66 167 66C176 66 182 62 185 55H200C196 67 184 75 167 75C142 75 125 58.5 125 37.5Z"
            fill="#191B1E"
          />
        </svg>
      </div>
    ),
    {
      width: 512,
      height: 512,
    }
  );
}
