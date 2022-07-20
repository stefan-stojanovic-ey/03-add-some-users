import React from "react";

import styles from "./UsersList.module.css";
import Card from "../UI/Card";
import NoUsers from "./NoUsers";

const UsersList = ({ users }) => {
  const zero = users.length === 0;

  return (
    <Card className={styles.users}>
      <ul>
        {zero ? (
          <NoUsers />
        ) : (
          users.map(({ name, age }, idx) => (
            <li key={idx + name + age}>
              {name} ({age})
            </li>
          ))
        )}
      </ul>
    </Card>
  );
};

export default UsersList;
