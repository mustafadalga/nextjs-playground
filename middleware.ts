const authenticatedRoutes = [ "/admin" ]
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const jwtToken: string | undefined = request.cookies.get("jwt")?.value;
    const pathName = request.nextUrl.pathname;
    console.log(pathName, "kanal istanbl")


    if (authenticatedRoutes.some(route => pathName.startsWith(route))) {
        if (!jwtToken) {
            if (pathName.startsWith("/api")) {
                return NextResponse.json({
                    error: "Unauthorized",
                }, { status: 401 })
            }

            const callbackUrl = encodeURIComponent(`${request.nextUrl.origin}${pathName}`);
            const absoluteRedirectUrl = `${request.nextUrl.origin}/login?callbackUrl=${callbackUrl}`;
            return NextResponse.redirect(absoluteRedirectUrl);
        }

    }

    const response = NextResponse.next();

    if (pathName.startsWith('/api')) {
        response.headers.set('Cookie', request.headers.get('cookie') || '');
    }

    return NextResponse.next();
}