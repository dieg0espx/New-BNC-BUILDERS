import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Strip port if present (e.g., "bncbuildersinc.com:443" -> "bncbuildersinc.com")
  const hostname = host.split(':')[0].toLowerCase();

  // Skip redirect in development
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return NextResponse.next();
  }

  // Redirect non-www to www for any bncbuildersinc.com request without www
  if (hostname === 'bncbuildersinc.com') {
    const url = request.nextUrl.clone();
    url.host = `www.bncbuildersinc.com`;
    url.port = '';
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
