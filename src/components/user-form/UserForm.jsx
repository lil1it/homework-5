import React from 'react';
import { useState } from 'react';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';
import"./UserForm.css"

const UserForm = (props) => {

    const [userName,setUserName] = useState("")
    const [userAge,setUserAge] = useState("")

    const enabled = userName.length > 0 && userAge.length > 0 ;

    const cancelHanlder = (event) => {
        event.preventDefault();
        props.onShowForm();
      };

      const userAgeInputChangeHandler = (event) => {
        // console.log(event.target.value);
        const value = event.target.value;
        if (value.charAt(0) !== "-") setUserAge(event.target.value); // 'e'
      };

      const userNameInputChangeHandler = (event) => {
        // console.log(event.target.value);
        setUserName(event.target.value); // 'e'
      };


      const SaveHandler = (event) => {
        event.preventDefault();

        const userData = {
          userName,
          userAge
        };
        // console.log(expenseData);
    
        props.newUserAdd(userData);
    
        setUserAge("");
        setUserName("");
      };




    return (
        <form className='newUserForm' action="#">
            <Input onChange={userNameInputChangeHandler} value={userName} id='name' labelName="UserName" inputType="text" placeholder="Введите Имя"/>
            <Input onChange={userAgeInputChangeHandler} value={userAge} id='age' labelName="Age(Year)" inputType="number" placeholder="Введите Возраст" />
            <div className='btn-position'><Button title="Отмена" onClick={cancelHanlder} />
            <Button  title="Сохранить"  onClick={SaveHandler} disabled={!enabled}/>
            </div>
        </form>
    );
};

export default UserForm;