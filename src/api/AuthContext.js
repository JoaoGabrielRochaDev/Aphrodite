import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import api from "./api";
import usersApi from "./users.api";
const JWT_TOKEN_NAME = "jwt_token";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const jwt = Cookies.get(JWT_TOKEN_NAME);
    if (!jwt) {
      setIsLoading(false);
      return;
    }

    updateUserByToken(jwt).finally(() => setIsLoading(false));
  }, []);

  async function updateUserByToken(token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const loggedUser = await usersApi.getMe();

    setUser(loggedUser);
  }

  async function login({ email, password }) {
    const { access_token } = await usersApi.login({
      email,
      password,
    });

    api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
    Cookies.set(JWT_TOKEN_NAME, access_token, {
      expires: 30,
    });
    setUser(access_token);
  }

  async function logout() {
    setUser(null);
    Cookies.remove(JWT_TOKEN_NAME);
    api.defaults.headers.common["Authorization"] = undefined;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
