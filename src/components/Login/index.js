import React from "react";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import UserInfo from "../UserInfo";

const clientId =
  "543267694047-6fpjeu5rjbcsc5s2podj86qvb4l3akel.apps.googleusercontent.com";

export default function Login() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    image: "",
  });

  const onSuccess = (response) => {
    const profileObj = JSON.stringify(response.profileObj);
    localStorage.setItem("profileObj", profileObj);
    localStorage.setItem("isLogin", "True");
    setUser({
      name: response.profileObj.name,
      email: response.profileObj.email,
      image: response.profileObj.imageUrl,
    });
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
      <UserInfo user={user} />
      <button
        onClick={() => {
          console.log(user);
        }}
      >
        user
      </button>
    </div>
  );
}
