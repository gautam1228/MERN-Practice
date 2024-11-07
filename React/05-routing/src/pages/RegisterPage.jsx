import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {

    const navigate = useNavigate();

    function redirectToHome(){
        navigate("/");
    }

    return <div>
        This is register page
        <br/>
        <button onClick={redirectToHome} >Go To Home Page</button>
    </div>;
};

export default RegisterPage;
