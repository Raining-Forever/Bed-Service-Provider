import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "543267694047-6fpjeu5rjbcsc5s2podj86qvb4l3akel.apps.googleusercontent.com";

export default function Login() {
  const onSuccess = (response) => {
    const token = JSON.stringify(response.tokenObj);
    localStorage.setItem("token", token);
    const retrieveToken = localStorage.getItem("token");
    // console.log(JSON.parse(retrieveToken));
    console.log(localStorage);
  };
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
