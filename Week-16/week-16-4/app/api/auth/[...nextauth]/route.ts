import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers : [
        CredentialsProvider({
            name : "Email",
            credentials : {
                username : { label: "Username", type: "text", placeholder: "Email" },
                password : { label: "password", type: "password", placeholder: "Password" },
            },
            async authorize(credentials: any){

                return {
                    id : 'user1',
                    email: "gautam@gmail.com",
                    password: "asdasdads",
                    name: "gautam"
                };

            },
        })
    ],
    secret: process.env.NEXT_AUTH_SECRET
});

export const GET = handler;
export const POST = handler;