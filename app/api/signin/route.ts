// need for mobile app

import { NextResponse } from "next/server";


export async function POST(request: Request) {

    return NextResponse.json({ success: true, message: "Sign-in endpoint is under construction" }, { status: 200 });
}       