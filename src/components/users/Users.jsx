import React from 'react';
import UserItem from '../user-item/UserItem';
import"./Users.css"


const Users = ({users}) => {
    return (
        
            <ul className="UserList">
        {users.map((elem, index) => {
          return (
            <UserItem
              key={index}
              userName={elem.userName}
              userAge={elem.userAge}
              
            />
          );
        })}
      </ul>
     
    );
};

export default Users;