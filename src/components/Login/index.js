import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

function Login() {
  const history = useHistory();
  const googleSuccess = async ({ tokenId }) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_ADDRESS}/users/login`, {
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
    history.push("/");
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      render={(renderProps) => (
        <button
          type="button"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          google login
        </button>
      )}
      onSuccess={googleSuccess}
      onFailure={googleFailure}
      cookiePolicy="single_host_origin"
    />
  );
}

export default Login;
