import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;

  if (!token) return NextResponse.redirect(new URL("/login", req.url));

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/validate`,
    {
      headers: {
        cookie: `accessToken=${token}`,
      },
      cache: "no-store",
    }
  );

  if (res.status !== 200)
    return NextResponse.redirect(new URL("/login", req.url));

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
