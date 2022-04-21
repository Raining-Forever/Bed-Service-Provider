import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import Login from "../AuthButton/Login";
import Logout from "../AuthButton/Logout";
import styles from "./Subnavbar.module.css";

export default function Subnavbar() {
  const [isLogin, setIsLogin] = useState(false);
  const { authLoaded, auth } = useAuthContext();
  useEffect(() => {
    if (authLoaded) {
      setIsLogin(auth.loggedIn);
    }
    // registerCheck();
  }, [auth]);
  return (
    <div className={styles.subnav}>
      <div>{auth.email}</div>
      {isLogin ? <Logout /> : <Login />}
    </div>
  );
}
