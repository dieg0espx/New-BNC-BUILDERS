import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
          width="120"
          height="60"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H24C32 0 38 4 38 14C38 20 35 24 30 26C36 28 40 33 40 41C40 53 32 60 22 60H0V0ZM22 22C27 22 30 19 30 14C30 9 27 6 22 6H10V22H22ZM24 54C31 54 36 50 36 42C36 34 31 30 24 30H10V54H24Z"
            fill="#191B1E"
          />
          <path
            d="M50 0H62L80 28V0H90V60H78L60 30V60H50V0Z"
            fill="#191B1E"
          />
          <path
            d="M100 30C100 13 111 0 128 0C139 0 147 6 150 15H140C138 11 134 8 128 8C116 8 110 18 110 30C110 42 116 52 128 52C134 52 138 49 140 45H150C147 54 139 60 128 60C111 60 100 47 100 30Z"
            fill="#191B1E"
            transform="translate(-20, 0) scale(0.75)"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
