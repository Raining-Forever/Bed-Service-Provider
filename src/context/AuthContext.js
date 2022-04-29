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
  };

  const logout = () => {
    localStorage.removeItem("auth");
    localStorage.setItem(
      "auth",
      JSON.stringify({
        user_id: 0,
        email: "",
        role: "none",
        googleAccount: "",
        loggedIn: false,
      })
    );
    setAuth({
      user_id: 0,
      email: "",
      role: "none",
      googleAccount: "",
      loggedIn: false,
    });
    navigate("/");
  };

  const registerCheck = () => {
    console.log("registerCheck");
    if (auth.loggedIn) {
      console.log(
        "registerCheck loggedIn : true"
      );
      if (auth.role === "none") {
        navigate("/register");
      }
    }
  };

  const roleCheck = (
    roles = [],
    redicrecto = "/accessdenied"
  ) => {
    if (authLoaded) {
      if (!roles.includes(auth.role)) {
        console.log(
          "checkroles",
          roles,
          "rolenow",
          auth.role
        );
        navigate(redicrecto);
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
      value={{
        auth,
        login,
        logout,
        authLoaded,
        roleCheck,
        registerCheck,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
