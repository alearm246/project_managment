
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const DEFAULT_USER = {
    id: "",
    username: ""
}

export const UserContext = createContext(DEFAULT_USER);

export function UserProvider(props) {
  const [user, setUser] = useState(DEFAULT_USER);

  const getCurrentUser = async () => {
      try {
        const res = await axios.get("http://localhost:3000/users/current", { withCredentials: true });
        const { id, username } = res.data;
        const user = {
            id,
            username
        }
        setUser(user);
      } catch(err) {
          console.error(err);
      }
  }

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
