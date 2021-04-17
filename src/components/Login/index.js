import React from "react";
import { GoogleLogin } from "react-google-login";

function Login() {
  const googleSuccess = async ({ tokenId }) => {
    try {
      const res = await fetch("http://localhost:5000/users/login", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const googleFailure = () => {
    console.log("google sign in unsuccessful");
  };

  return (
    <>
      <GoogleLogin
        clientId="286718780152-q76fp5k4tfc9jgt7ltjafeh0rsq9jeq4.apps.googleusercontent.com"
        render={(renderProps) => (
          <button type="button" onClick={renderProps.onClick} disabled={renderProps.disabled}>
            custom google login
          </button>
        )}
        buttonText="Google Login"
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
      />
    </>
  );
}

export default Login;
