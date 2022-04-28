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
  }, [auth]);
  
  // console.log(googleAccountInfo.email);
  return (
    <div className={styles.subnav}>
      {/* <div>{googleAccountInfo.email}</div> */}
      {isLogin ? <Logout /> : <Login />}
    </div>
  );
}
