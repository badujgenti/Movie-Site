import React from 'react'
import Button from "./Button";
import Input from "./Input";

import {Link }  from "react-router-dom";


export default function Register() {
  return (
    <div className="bg-bgColor h-screen w-full flex flex-col justify-center items-center px-6  ">
    <img src={process.env.PUBLIC_URL + "/assets/logo.svg"} alt="brma mainc ver xedavs"/>
    <div className=" max-w-sm bg-semiDarkBlue rounded-[10px] mt-[58px] p-6 pb-8 sm:max-w-sm">
    <h1 className="text-[32px] text-white font-light mb-10"> Sign Up </h1>
    <Input type="email" placeholder="Email address"/>
    <Input type="password" placeholder="Password"/>
    <Input type="password" placeholder="Repeat Password"/>

    <Button > <Link to="/home"> Create an account  </Link> </Button>
    <p className="ml-7"> Already have an account? <Link to="/" className="text-[#FC4747]" > Login </Link> </p> 

    </div>

    </div>
  )
}
