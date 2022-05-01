import React, { useEffect, useState } from "react";
import styles from "../../AuthButton/AuthButton.module.css";
import { GoogleLogout } from "react-google-login";
import { useAuthContext } from "../../../context/AuthContext";
import { Menu, Dropdown } from "antd";

const clientId = process.env.REACT_APP_CLIENT_ID;

export default function Logout() {
  const { logout, auth } = useAuthContext();
  const defaultIconpatient =
    "https://cdn-icons-png.flaticon.com/512/2750/2750657.png";
  const defaultIcondoctor =
    "https://cdn-icons-png.flaticon.com/512/822/822169.png";
  const defaultIconhospital =
    "https://cdn-icons-png.flaticon.com/512/3580/3580415.png";

  const [displayIcon, setDisplayIcon] = useState(
    "https://cdn-icons-png.flaticon.com/512/847/847969.png"
  );

  useEffect(() => {
    if (auth.role === "patient") setDisplayIcon(defaultIconpatient);
    if (auth.role === "doctor") setDisplayIcon(defaultIcondoctor);
    if (auth.role === "hospital") setDisplayIcon(defaultIconhospital);
  }, [auth]);

  const responseGoogle = (response) => {
    // console.log(response);
    localStorage.clear();
  };
  const onSuccess = () => {
    console.log("log out Success");
    logout();
  };
  let googleAccountInfo = JSON.parse(localStorage.getItem("googleAccount"));
  return (
    <div className={styles.wrapprofile}>
      <div className={styles.emailnav}>{googleAccountInfo.email}</div>
      <Dropdown
        className={styles.profiledropdown}
        overlay={
          <Menu>
            <Menu.Item key="mode">
              <GoogleLogout
                className={styles.googleButton}
                buttonText="ออกจากระบบ"
                clientId={clientId}
                onLogoutSuccess={onSuccess}
                onFailure={responseGoogle}
              />
            </Menu.Item>
          </Menu>
        }
      >
        <img src={displayIcon} />
      </Dropdown>
      {/* <GoogleLogout
        className={styles.googleButton}
        buttonText="ออกจากระบบ"
        clientId={clientId}
        onLogoutSuccess={onSuccess}
        onFailure={responseGoogle}
      /> */}
    </div>
  );
}
