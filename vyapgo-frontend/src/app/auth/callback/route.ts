import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const nextParam = url.searchParams.get("next");
  const safePath = nextParam && nextParam.startsWith("/") ? nextParam : "/onboarding";

  return NextResponse.redirect(new URL(safePath, url.origin));
}
