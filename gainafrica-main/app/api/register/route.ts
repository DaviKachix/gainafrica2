import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Process data, save to DB
    console.log("New Registration:", data);

    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ message: "Registration successful" }, { status: 200 });
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json({ message: "Registration failed" }, { status: 500 });
  }
}
