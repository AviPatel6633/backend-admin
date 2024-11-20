import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const validateURL = process.env.NEXT_PUBLIC_BACKEND_URL + "/validate-token";

export async function middleware(request) {
  const cookieStore = cookies();
  const token = cookieStore.get('auth_token');

  // If no token exists, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Check token validity by calling the backend (API)
  const isValid = await validateToken(token.value);

  // If the token is invalid, redirect to login
  if (!isValid) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // If the token is valid, proceed
  return NextResponse.next();
}

// API to validate token by sending it to backend
async function validateToken(token) {
  const response = await fetch(validateURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
  });

  const data = await response.json();
  return data.isValid; 
}

// Define which routes the middleware applies to
export const config = {
  matcher: ['/dashboard/:path*'],
};
