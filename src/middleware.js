import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request) {
  // Get the token from the cookies
  const cookieStore = cookies();
  const token = cookieStore.get('auth_token');

  // Check if token exists and is valid
  if (token && token.value) {
      return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/', request.url));
}

// Define which routes the middleware applies to
export const config = {
  matcher: ['/dashboard/:path*'],
};
