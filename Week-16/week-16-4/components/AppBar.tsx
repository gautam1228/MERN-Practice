"use client"

import { signIn, signOut, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation"

export default function(){
    
    // const router = useRouter();
    const session = useSession();

    return (
        <div>
            <button onClick={() => {
                signIn();        
            }}>Sign In</button>

            <button onClick={() => {
                signOut();        
            }}>Sign Out</button>
            {JSON.stringify(session)}
        </div>
    )

}