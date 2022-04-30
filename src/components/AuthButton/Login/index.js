import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { useAuthContext } from "../../../context/AuthContext";
import styles from "../../AuthButton/AuthButton.module.css";
import { useNavigate } from "react-router-dom";

const clientId = process.env.REACT_APP_CLIENT_ID;

export default function Login() {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const onSuccess = (res) => {
    const profile = res.profileObj;
    const email = profile.email;
    axios
      .post("https://bed-service-provider.herokuapp.com/api/user", {
        email: email,
      })
      .then((response) => {
        console.log("response: ", response.data);
        // localStorage.setItem("email", response.data.email);
        // localStorage.setItem("loggedIn", response.data.loggedIn);
        // localStorage.setItem("user_id", response.data.user_id);
        // localStorage.setItem("role", response.data.role);
        login(response.data);
        if (response.data.loggedIn) {
          if (response.data.role === "none") {
            navigate("/register");
          }
        }
      });
    console.log("Login success! user: ", profile);
    localStorage.setItem("googleAccount", JSON.stringify(profile));
  };

  const onFailure = (res) => {
    console.log("Login failed! res: ", res);
  };

  return (
    <div className={styles.wrapprofile}>
      <GoogleLogin
        className={styles.googleButton}
        clientId={clientId}
        buttonText="ลงทะเบียน/เข้าสู่ระบบ"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        // isSignedIn={true}
      />
    </div>
  );
}
