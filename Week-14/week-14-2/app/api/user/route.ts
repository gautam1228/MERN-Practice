import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export function GET(){
    //db logic
    return Response.json({
        email : "gautam@gmail.com",
        name : "Gautam"
    });
}

export async function POST(req: NextRequest){

    const body = await req.json();

    const user = await client.user.create({
        data : {
            username : body.username,
            name : body.name,
            password : body.password
        }
    });

    console.log(user.id);

    return NextResponse.json({
        message : "Logged In !"
    });

}