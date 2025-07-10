import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export async function POST(req: NextRequest) {
    
    const { name, username, password } = await req.json();

    const newUser = await prismaClient.user.create({
        data: {
            name,
            username,
            password
        }
    });

    if (newUser) {
        return NextResponse.json({
            "success": true,
            "message": "Signed Up Successfully!"
        });
    }

    return NextResponse.json({
        "success": false,
        "message": "Error while signing up."
    });

}