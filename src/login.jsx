import Button from "./Button";
import Input from "./Input";

import {Link }  from "react-router-dom";
import React from 'react';


const Login = () =>{
    return (
        <div className="bg-bgColor h-screen w-full flex flex-col justify-center items-center px-6 "> 
            <img src={process.env.PUBLIC_URL + "/assets/logo.svg"} alt="brma mainc ver xedavs"/>
            <div className=" max-w-sm bg-semiDarkBlue rounded-[10px] mt-[58px] p-6 pb-8 md:max-w-sm ">
                <h1 className="text-[32px] text-white font-light mb-10"> Login </h1>
        <Input type="email" placeholder="Email address"/>
        <Input type="password" placeholder="Password"/>

       
        <Button >  <Link to="/home">  Login to your account </Link> </Button>
        <p className=" text-center"> Don’t have an account? <Link to="/register" className="text-[#FC4747]" > Sign up </Link> </p> 
        </div>
        </div>

        )
}

export default Login;