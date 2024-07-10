import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext();

const useFetchUserData = () => {
  const [user, setUser] = useState(null);

  const user_id = Cookies.get("user_id");

  useEffect(() => {
    if (!user_id) return;

    fetch(`/api/users/${user_id}`)
      .then((res) => {
        if (!res.ok) {
          return { success: false, message: "Failed to fetch user data" };
        }
        return res.json();
      })
      .then((dataObject) => {
        setUser(dataObject.data);
      });
  }, [user_id]);

  const login = (email, password) => {
    return fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          return { success: false, message: "Failed to login" };
        }
        return res.json();
      })
      .then((dataObject) => {
        return setUser(dataObject.data);
      });
  };

  const logout = () => {
    fetch(`/api/logout`, {
      method: "POST",
    }).then(() => {
      setUser(null);
    });
  };

  return { user, login, logout };
};

export const useUser = () => {
    return useContext(UserContext)
}

export const UserProvider = (props) => {
    const user = useFetchUserData()

    return (
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    )
}
