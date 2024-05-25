"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export const AppBar = () => {

    const session = useSession();

    return <div>
        <button onClick={ () => {
            signIn();            
        }}>
            SignIn
        </button>
        <button onClick={ () => {
            signOut();            
        }}>
            SignOut
        </button>

        {JSON.stringify(session)}

    </div>

}