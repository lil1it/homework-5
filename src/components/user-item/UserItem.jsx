import React from 'react';
import "./UserItem.css"

const UserItem = ({userName,userAge}) => {
    return (
        <div className='userItem'>
            
         <p className='itemInfo'>{userName} ( {userAge} years old)</p>   
        
        </div>
    );
};

export default UserItem;