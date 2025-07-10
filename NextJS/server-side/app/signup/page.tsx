"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup(){

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const router = useRouter();

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex justify-center items-center bg-[#1c1c1c] rounded-md">
                <div className="flex flex-col justify-center m-4 items-center">
                    <div className="flex justify-center text-xl text-slate-300 font-extrabold">
                        Sign Up
                    </div>
                    <input placeholder="Name" type="text" onChange={(e) => { setName(e.target.value) }} className="border border-slate-300 rounded-md m-4 pl-2"/>
                    <input placeholder="Username" type="text" onChange={(e) => { setUsername(e.target.value) }} className="border border-slate-300 rounded-md m-4 pl-2"/>
                    <input placeholder="Password" type="password" onChange={(e) => { setPassword(e.target.value) }} className="border border-slate-300 rounded-md m-4 pl-2"/>
                    <button className="bg-slate-700 w-20 rounded-md py-1 px-2" onClick={async () => {
                        const { data } = await axios.post("http://localhost:3000/api/v1/signup", {
                            name,
                            username,
                            password
                        });
                        if (data.success) {
                            router.push("/signin");
                        }
                    }}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}