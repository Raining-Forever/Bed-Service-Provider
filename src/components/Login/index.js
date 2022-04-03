import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";

const clientId =
  "998136068404-6n8uj2nhv01eevcrq0751cqq11bgn81i.apps.googleusercontent.com";

export default function Login() {
  const { login } = useAuthContext();

  const onSuccess = (res) => {
    const profile = res.profileObj;
    const email = profile.email;
    axios
      .post("http://localhost:3000/api/user", { email: email })
      .then((response) => {
        console.log("response: ", response.data);
        // localStorage.setItem("email", response.data.email);
        // localStorage.setItem("loggedIn", response.data.loggedIn);
        // localStorage.setItem("user_id", response.data.user_id);
        // localStorage.setItem("role", response.data.role);
        login(response.data);
      });
    console.log("Login success! user: ", profile);
    localStorage.setItem("googleAccount", JSON.stringify(profile));
  };

  const onFailure = (res) => {
    console.log("Login failed! res: ", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        // isSignedIn={true}
      />
    </div>
  );
}
