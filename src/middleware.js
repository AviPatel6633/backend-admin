import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

// Secret key should match the one used to sign the token (keep this in an environment variable)
const JWT_SECRET = process.env.JWT_SECRET || '6633'; // Always use environment variables for sensitive info

// Function to validate the token
const isValidToken = (token) => {
  try {
    // Verify the token using JWT_SECRET
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded; // If token is valid, return decoded user data
  } catch (err) {
    console.error('JWT Error:', err);  // Log the error for debugging
    return null; // Invalid token
  }
};

export function middleware(request) {
  // Get the token from the cookies
  const cookieStore = cookies();
  const token = cookieStore.get('auth_token'); // Cookie name should match the one used during login

  console.log('Token:', token); // Log token to debug

  // Check if token exists and is valid
  if (token && token.value) {
    const decoded = isValidToken(token.value);

    console.log('Decoded:', decoded); // Log decoded JWT to debug

    // If the token is valid, allow the request to continue
    if (decoded) {
      return NextResponse.next();
    }
  }

  // If the token is missing or invalid, redirect to login page
  return NextResponse.redirect(new URL('/', request.url)); // Redirect to login page if token is invalid
}

// Define which routes the middleware applies to
export const config = {
  matcher: ['/dashboard/:path*'],  // Example: Apply to protected pages
};


// error
// JWT Error: [Error: The edge runtime does not support Node.js 'crypto' module.
//     Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime]
//     Decoded: null