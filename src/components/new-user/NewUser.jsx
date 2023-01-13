import React, { useState } from 'react';
import Button from '../UI/button/Button';

import UserForm from '../user-form/UserForm';
import './NewUser.css'

export  const NewUser = ({newUserAdd}) => {

    const [showForm, setShowForm] = useState(false)
   
    const showUserForm = () =>{
        setShowForm((prevState)=> {
            // console.log("djsfkljshlkf", !prevState);
           return !prevState

        } )
        // console.log("hadsfkjhaskd");
    }


    return (
        <div className='newUser'>
            { showForm ? <UserForm newUserAdd={newUserAdd} onShowForm = {showUserForm}/> : <Button  title="ADD NEW USER" onClick={showUserForm} />}
        </div>
    );
};