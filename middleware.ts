import AuthToken from "@/utils/AuthToken";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = AuthToken.get();
    const isLoggedIn = token !== null;
    const { pathname } = request.nextUrl;
    const publicPaths = ['/landingPage', '/about'];

    // Check if the user is accessing a public path
    const isPublicPath = publicPaths.includes(pathname);
    if (isPublicPath) {
        // If accessing a public path
        if (token) {
            // Redirect logged-in users away from public paths
            return NextResponse.redirect(new URL("/")); // Redirect to home page or another appropriate URL
        }
    } else {
        // If accessing a protected path
        if (!isLoggedIn) {
            // Redirect users to login page if not logged in
            return NextResponse.redirect(new URL("/login")); // Redirect to login page
        }
    }
}
export const config = {
    // Define the matcher for the paths where the middleware should be applied
    matcher: ['/protectedRoute']
};