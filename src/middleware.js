import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = ['/login', '/api/login', '/', '/register'];
  if (url.some((v) => v === request.nextUrl.pathname)) {
    return NextResponse.next();
  } else {
    const token = request.cookies.get('access_token');
    if (token) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
}

export const config = {
  matcher: ['/login', '/api/:function*', '/api/books/uploads', '/create'],
};
