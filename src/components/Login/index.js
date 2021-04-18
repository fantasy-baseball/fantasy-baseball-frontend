import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

function Login() {
  const history = useHistory();
  const onGoogleSuccess = async ({ tokenId }) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_ADDRESS}/users/login`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
        credentials: "include",
      });
      const { data } = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const onGoogleFailure = () => {
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
      onSuccess={onGoogleSuccess}
      onFailure={onGoogleFailure}
      cookiePolicy="single_host_origin"
    />
  );
}

export default Login;
