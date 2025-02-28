import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request?.url);
  const token = searchParams?.get("token");

  const response = await fetch(
    `https://recaptchaenterprise.googleapis.com/v1/projects/enquetify-app-1713263418254/assessments?key=${process
      .env.RECAPTCHA_SECRET_KEY!}`,
    {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: {
          token,
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        },
      }),
    }
  );

  const data = await response.json();
  return NextResponse.json(data);
}
