import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AuthRoutes = ["/login", "/register"];
const roleBaseRoute = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};

type TRole = keyof typeof roleBaseRoute;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // const user = {
  //   name: "tansim",
  //   role: "ADMIN",
  //   // role: "USER",
  //   token: "abc",
  // };
  const user = undefined;

  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (user?.role && roleBaseRoute[user?.role as TRole ]) {
    const routes = roleBaseRoute[user?.role as TRole];
    if (routes.some((route) => route.test(pathname))) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/profile", "/admin", "/login", "/register"],
};
