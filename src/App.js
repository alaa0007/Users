import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const handleAddUser = (username, age) => {
    setUsersList((prevList) => {
      return [...prevList, { id: Math.random().toString(), username, age }];
    })
  }

  return (
    <>
      <AddUser onAddUserToList={handleAddUser} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
