import React from "react";
import styles from "../../AuthButton/AuthButton.module.css";
import { GoogleLogout } from "react-google-login";
import { useAuthContext } from "../../../context/AuthContext";

const clientId =
  "543267694047-6fpjeu5rjbcsc5s2podj86qvb4l3akel.apps.googleusercontent.com";

export default function Logout() {
  const {
    googleAccount,
    auth,
    logout,
    authLoaded,
  } = useAuthContext();

  const responseGoogle = (response) => {
    console.log(response);
    localStorage.clear();
  };
  const onSuccess = () => {
    console.log("log out Success");
    logout();
  };

  return (
    <div className={styles.wrapprofile}>
      <img
        className={styles.imgproflie}
        src="https://cdn-icons-png.flaticon.com/512/527/527489.png"
      />

      <GoogleLogout
        className={styles.googleButton}
        buttonText="ออกจากระบบ"
        clientId={clientId}
        onLogoutSuccess={onSuccess}
        onFailure={responseGoogle}
      />
    </div>
  );
}
