import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { hasCookie } from 'cookies-next/server';


export async function middleware(req: NextRequest, res: NextResponse) {
    const tokenExists = await hasCookie('token', { req, res });
    const { pathname, searchParams } = req.nextUrl

    const protectedPaths = ['/dashboard'];

    const isAuthPage = pathname.startsWith('/auth/')
    const isProtectedPages = protectedPaths.includes(pathname)

    if (!tokenExists && isProtectedPages) {
        return NextResponse.redirect(new URL('/auth/sign-in', req.url))
    }

    if (tokenExists && isAuthPage) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    if(!searchParams.get('token') && pathname === '/auth/reset-password') {
        return NextResponse.redirect(new URL('/auth/sign-in', req.url))
    }

    return NextResponse.next()
}


export const config = {
    matcher: [
        '/dashboard/:path*',
        '/auth/:path*'
    ],
}