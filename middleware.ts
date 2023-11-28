import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith("/merchants") &&
      req.nextauth.token?.role !== "merchant"
    )
      return NextResponse.rewrite(
        new URL("/auth?message=You are not authorized", req.url)
      );
    if (
      req.nextUrl.pathname.startsWith("/sales") &&
      req.nextauth.token?.role !== "sales"
    )
      return NextResponse.rewrite(
        new URL("/auth?message=You are not authorized", req.url)
      );
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  // matcher: ["/merchants", "/merchants/:path*", "/sales/", "/sales/:path*"],
};
