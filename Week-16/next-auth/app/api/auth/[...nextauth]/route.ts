import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers : [
        CredentialsProvider({
            name : "Email",
            credentials : {
                username : { label : 'Email', type : 'text', placeholder : 'example@gmail.com' },
                password : { label : 'Password', type : 'password', placeholder : '1234' }
            },
            async authorize(credentials: any){

                return {

                    id : "user1",
                    email : "gautam@gmail.com",
                    name : "Gautam Singh"

                };

            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    secret : process.env.NEXTAUTH_SECRET,
    callbacks : {
        
    }
});


export const GET = handler;
export const POST = handler;