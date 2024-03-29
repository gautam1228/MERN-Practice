"use client"
import axios from "axios";
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function(){

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div className="flex flex-col">
                    <div className="text-md">
                        Name
                    </div>
                    <input type="text" placeholder="John Doe" onChange={(e) => {
                        setName(e.target.value);
                    }}  className="my-2 border  border-slate-300 p-1.5 rounded-md"/>
                    <div className="text-md">
                        Username
                    </div>
                    <input type="text" placeholder="example@gmail.com" onChange={(e) => {
                        setUsername(e.target.value);
                    }}  className="my-2 border border-slate-300 p-1.5 rounded-md"/>
                    <div className="text-md">
                        Password
                    </div>
                    <input type="password" placeholder="1234" onChange={(e) => {
                        setPassword(e.target.value);
                    }} className="my-2 border border-slate-300 p-1.5 rounded-md"/>
                    <button className="bg-slate-500 rounded-md p-1 text-white" onClick={async () => {
                        await axios.post("http://localhost:3000/api/user", {
                            name,
                            username,
                            password
                        });
                        router.push("/")     
                    }}>Sign up</button>
                </div>
            </div>
        </div>
    )

}