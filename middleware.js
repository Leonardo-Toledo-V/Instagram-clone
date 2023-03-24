import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
    const cooki = request.cookies.get('token');
    if(cooki === undefined){
      return NextResponse.redirect(new URL("/", request.url));
    }
    const jwt = cooki.value
  try {
      await jwtVerify(
      jwt,
      new TextEncoder().encode("Adolfo es gay")
    );
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/feed/:path*"],
};