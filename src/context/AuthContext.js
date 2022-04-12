import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
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

  const [authLoaded, setAuthLoaded] =
    useState(false);
  const navigate = useNavigate();

  const login = (data) => {
    localStorage.setItem(
      "auth",
      JSON.stringify(data)
    );
    setAuth(data);
    if (authLoaded) {
      setUserinfo(data);
    }
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

  const roleCheck = (
    roles = [],
    redicrecto = "/accessdenied"
  ) => {
    if (authLoaded) {
      if (!roles.includes(auth.role)) {
        navigate(redicrecto);
      }
    }
  };

  const [userinfo, setUserinfo] = useState({});
  // add new for get localstorage
  // const getUserinfo = () => {
  //   if (authLoaded) {
  //   }
  // };

  useEffect(() => {
    const data = localStorage.getItem("auth");
    setAuth(JSON.parse(data || "{}"));
    setAuthLoaded(true);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
        authLoaded,
        roleCheck,
        userinfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
