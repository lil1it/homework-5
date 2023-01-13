import { useState } from 'react';
import './App.css';
import {NewUser} from './components/new-user/NewUser';
import Users from './components/users/Users';

function App() {

  
  const [users,setUsers] = useState([
    {
      userName: "Nurbolot",
      userAge: 30
    },
    {
      userName: "Barsbek",
      userAge: 25
    },
    {
      userName: "Bayaman",
      userAge: 40
    }
  ])

  users.sort((a,b) => {
    return b.userAge -a.userAge 
  })


  const addNewUserHandler = (data) =>{
    const updatedUsers = [...users]
    updatedUsers.push(data)
    setUsers(updatedUsers)
  }

  return (
    <div className="App">
      <NewUser newUserAdd={addNewUserHandler}/>
      <Users users={users}/>
      
    </div>
  );
}

export default App;
