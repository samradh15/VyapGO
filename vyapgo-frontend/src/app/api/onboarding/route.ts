import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "Onboarding is handled by the client flow at /onboarding.",
  });
}

export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      message: "Use the client onboarding flow and firebase-db helpers.",
    },
    { status: 501 }
  );
}
