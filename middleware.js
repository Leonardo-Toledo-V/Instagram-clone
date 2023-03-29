import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  console.log(request)
    const cooki = request.cookies.get('token');
    if(cooki === undefined){
      return NextResponse.redirect(new URL("/", request.url));
    }
    const jwt = cooki.value
  try {
      await jwtVerify(
      jwt,
      new TextEncoder().encode("Instagram Clone es lo mejor del mundo! :)")
    );
    NextResponse.redirect(new URL("/feed", request.url));
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  
    
  
}

export const config = {
  matcher: ["/feed/:path*"],
};