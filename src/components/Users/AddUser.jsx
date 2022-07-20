import React, { useState } from "react";

import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = ({ onAddUser }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);

  function addUserHandler(e) {
    e.preventDefault();

    // invalid empty inputs (any)
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "No empty inputs",
        message:
          "In order to add a user, there must be no empty inputs submitted.",
      });
      return;
    }

    // invalid if age < 1
    if (+enteredAge < 1) {
      setError({
        title: "Only positive values",
        message: "Users must not have age less than 1.",
      });
      return;
    }

    const newUserObj = { name: enteredUsername, age: enteredAge };

    onAddUser(newUserObj);
    setEnteredUsername("");
    setEnteredAge("");
  }

  function usernameChangeHandler(e) {
    setEnteredUsername(e.target.value);
  }

  function ageChangeHandler(e) {
    setEnteredAge(e.target.value);
  }

  function errorConfirmHandler(dismiss) {
    setError(dismiss);
  }

  return (
    <div>
      {error && <ErrorModal error={error} onOkClick={errorConfirmHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
