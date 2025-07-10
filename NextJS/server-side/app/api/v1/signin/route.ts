import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    
    const { username, password } = await req.json();
    
    return NextResponse.json({
        "success": true,
        "message": "Signedin successfully."
    });
}