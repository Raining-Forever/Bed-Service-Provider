import React from "react";
import { GoogleLogout } from "react-google-login";
const clientId =
  "543267694047-6fpjeu5rjbcsc5s2podj86qvb4l3akel.apps.googleusercontent.com";

export default function Logout() {
  const responseGoogle = (response) => {
    console.log(response);
    localStorage.clear();
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        onLogoutSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}
