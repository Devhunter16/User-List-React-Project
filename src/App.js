import React, { useState } from "react";

import UserList from "./components/UserList/UserList";
import UserInput from "./components/UserInput/UserInput";
import "./App.css";

function App() {
  const [userList, setUserList] = useState([
    { name: "Daniel", age: "33 years old", id: "1" },
    { name: "Max", age: "29 years old", id: "2" },
  ]);

  const addUserHandler = (enteredName, enteredAge) => {
    setUserList((prevList) => {
      const updatedUsers = [...prevList];
      updatedUsers.unshift({
        name: enteredName,
        age: `${enteredAge} years old`,
        id: Math.floor(Math.random() * 1001),
      });
      return updatedUsers;
    });
  };

  const deleteUserHandler = (userId) => {
    setUserList((prevList) => {
      const updatedList = prevList.filter((user) => user.id !== userId);
      return updatedList;
    });
  };

  let content = <p style={{ textAlign: "center" }}>No users found.</p>;

  if (userList.length > 0) {
    content = <UserList users={userList} onDeleteUser={deleteUserHandler} />;
  }

  return (
    <div className="App">
      <section id="user-form">
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section id="users">{content}</section>
    </div>
  );
}

export default App;
