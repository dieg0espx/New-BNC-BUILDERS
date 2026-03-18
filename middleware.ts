import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Redirect non-www to www (skip in development)
  if (
    host === 'bncbuildersinc.com' &&
    !host.startsWith('localhost') &&
    !host.startsWith('127.0.0.1')
  ) {
    const url = request.nextUrl.clone();
    url.host = 'www.bncbuildersinc.com';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    '/((?!_next/static|_next/image|favicon|api).*)',
  ],
};
