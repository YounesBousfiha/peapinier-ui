import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { PROTECTED_ROUTES, AUTH_ROUTES } from './constant/routes';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')

    const isProtectedRoute = Object.values(PROTECTED_ROUTES).some(route =>
        request.nextUrl.pathname.startsWith(route)
    )

    if(isProtectedRoute && !token) {
        return NextResponse.redirect(new URL(AUTH_ROUTES.LOGIN, request.url));
    }

    if ((request.nextUrl.pathname === AUTH_ROUTES.LOGIN || request.nextUrl.pathname === AUTH_ROUTES.REGISTER) && token) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}