import { NextResponse } from 'next/server'
import { auth } from './lib/auth';
import { headers } from 'next/headers';

export async function proxy(request) {
    const pathname = request.nextUrl.pathname;
    const loginUrl = new URL("/login", request.url);

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session){
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
}
 
export const config = {
  matcher: ['/appointments/:path+','/dashboard/:path*'],
}