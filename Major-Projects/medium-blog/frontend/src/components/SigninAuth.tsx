import { SigninInput} from "@gautam28dec/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = () => {

    const navigate = useNavigate();
    
    const [postInputs, setPostInputs] = useState<SigninInput>({
        email : "",
        password : ""
    });

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt.token);
            navigate("/blogs");
        }
        catch(e){
            alert("Error while signing in.")
        }
    }


    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="text-4xl font-extrabold mb-8 w-96 text-center">
                        Login to your account
                    </div>
                    <LabelledInput label="Email" placeholder="example@gmail.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            email : e.target.value
                        });
                        
                    }}/>
                    <LabelledInput label="Password" type ={"password"} placeholder="12345" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password : e.target.value
                        });
                    }}/>
                    <div className="text-slate-500 text-center pt-4">
                        Don't have an account ?
                        <Link to ="/signup" className="underline pl-2">
                            SignUp
                        </Link>
                    </div>
                    <button onClick = {sendRequest} className="bg-gray-800 rounded-lg w-full my-6 h-10 text-slate-200 text-lg cursor-pointer items-center">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}

interface LabelledInputType{
    label : string;
    placeholder : string;
    onChange : (e: ChangeEvent<HTMLInputElement>) => void;
    type? : string;
}

function LabelledInput({ label, placeholder, onChange, type } : LabelledInputType){

    return (
        <div>
            <label className="mb-2 text-md font-bold text-gray-900">
                {label}
            </label>
            <input type={type || "text"} placeholder={placeholder} onChange={onChange} className="mt-2 mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
        </div>
    )

}