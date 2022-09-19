import React from 'react';

const Button = (props) =>{
    return (
        <button className="w-full h-[48px] rounded-[6px] mb-6 mt-10 flex justify-center items-center bg-[#FC4747]"> {props.children} </button>
    )
}

export default Button ;