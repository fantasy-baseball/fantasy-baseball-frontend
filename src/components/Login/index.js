import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { saveUser } from "../../reducers";
import { failLogin } from "../../actions/user";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const onGoogleSuccess = ({ tokenId }) => {
    dispatch(saveUser(tokenId));
  };

  const onGoogleFailure = () => {
    dispatch(failLogin());
    history.push("/login");
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
