import React, { useState } from "react";

import ErrorModal from "../UI/Button/ErrorModal";
import Button from "../UI/Button/Button";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const userNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter both a username and age.",
      });
      return error;
    }
    // Adding a + before entered age because entered age is a string and we are comparing it to a number. +enteredAge is a type conversion from string to number.
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter an age of 1 or greater.",
      });
      return error;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };

  const buttonClickHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onHandleError={buttonClickHandler}
        />
      )}
      <form onSubmit={formSubmitHandler}>
        <div className={`${styles["form-control"]}`}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={userNameChangeHandler}
          />
        </div>
        <div className={`${styles["form-control"]}`}>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={userAgeChangeHandler}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default UserInput;
