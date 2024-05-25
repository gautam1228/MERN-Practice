import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

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
        })
    ],
    secret : process.env.NEXTAUTH_SECRET
});


export const GET = handler;
export const POST = handler;