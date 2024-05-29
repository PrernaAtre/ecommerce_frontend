import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    // Print a message to the console to check if the middleware is being called
    console.log("Middleware executed");

    // Retrieve the token
    const cookie = request.cookies.get('token');
    const token = cookie?.value;
    console.log("Token in middleware:", token);

    const isLoggedIn = token !== null && token !== undefined;
    const { pathname } = request.nextUrl;
    const publicPaths = ['/landingPage', '/about'];

    console.log("Pathname:", pathname);
    console.log("Is logged in:", isLoggedIn);

    // Check if the user is accessing a public path
    const isPublicPath = publicPaths.includes(pathname);
    console.log("Is public path:", isPublicPath);

    if (isPublicPath) {
        // If accessing a public path
        if (isLoggedIn) {
            // Redirect logged-in users away from public paths
            console.log("Redirecting to home page because user is logged in and accessing a public path");
            return NextResponse.redirect(new URL("/", request.url)); // Redirect to home page or another appropriate URL
        }
    } else {
        // If accessing a protected path
        if (!isLoggedIn) {
            // Redirect users to login page if not logged in
            console.log("Redirecting to login page because user is not logged in and accessing a protected path");
            return NextResponse.redirect(new URL("/landingPage", request.url)); // Redirect to login page
        }
    }

    // Continue with the request if no redirection is required
    console.log("Continuing with the request");
    return NextResponse.next();
}

export const config = {
    // Define the matcher for the paths where the middleware should be applied
    matcher: ['/protectedRoute']
};
