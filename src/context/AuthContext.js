import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  user_id: 0,
  email: "",
  role: "",
  googleAccount: "",
  loggedIn: false,
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user_id: 0,
    email: "",
    role: "",
    googleAccount: "",
    loggedIn: false,
  });

  const [authLoaded, setAuthLoaded] = useState(false);
  const navigate = useNavigate();

  const login = (data) => {
    localStorage.setItem("auth", JSON.stringify(data));
    setAuth(data);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setAuth({
      user_id: 0,
      email: "",
      role: "",
      googleAccount: "",
      loggedIn: false,
    });
  };

  const roleCheck = (roles = []) => {
    if (authLoaded) {
      if (!roles.includes(auth.role)) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("auth");
    setAuth(JSON.parse(data || "{}"));
    setAuthLoaded(true);
  }, []);
  return (
    <AuthContext.Provider
      value={{ auth, login, logout, authLoaded, roleCheck }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
