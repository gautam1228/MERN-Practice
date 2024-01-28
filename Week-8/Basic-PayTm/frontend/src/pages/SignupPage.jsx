import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

import axios from 'axios';

export const SignupPage = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (

        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-90 text-center p-2 h-max px-4">
                    <Heading label = {"Sign up"} />
                    <SubHeading label={"Enter your information to create an account"} />
                    <InputBox onChange={(e) => {
                        setFirstName(e.target.value);
                    }} label= {"First Name"} placeholder={"John"} />
                    <InputBox onChange={(e) => {
                        setLastName(e.target.value);
                    } } label= {"Last Name"} placeholder={"Doe"} />
                    <InputBox onChange={(e) => {
                        setUserName(e.target.value);
                    } } label= {"Username"} placeholder={"Johndoe@gmail.com"} />
                    <InputBox  onChange={(e) => {
                        setPassword(e.target.value);
                    }} label= {"Password"} placeholder={"1234"} />
                    <div className="pt-4">
                        <Button onClick={ async () => {
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                firstName,
                                lastName,
                                username,
                                password
                            });
                            localStorage.setItem("token", response.data.token);
                        } } label={"Sign up"} />
                    </div>
                    <BottomWarning label={"Already have an account ?"} buttonText={"Sign in"} to = {"/signin"} />
                </div>
            </div>
        </div>

    )

}