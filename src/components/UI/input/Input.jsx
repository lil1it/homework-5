import React from 'react';
import "./Input.css"

const Input = ({id , labelName , inputType , placeholder , ...rest}) => {
    return (
        <div className='container'>
            <label className='label' htmlFor={id}>{labelName}</label>
            <input className='input' type={inputType} placeholder={placeholder ||"..."} id={id} {...rest} ></input>
        </div>
    );
};

export default Input;