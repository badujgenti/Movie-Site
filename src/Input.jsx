import React  from 'react';

const Input = (props) =>{
        return (
            <input className={"w-full bg-transparent border-b border-jackBlue p-4 text-white" } type={props.type} placeholder={props.placeholder}/> 
        )
            
        
}

export default Input;