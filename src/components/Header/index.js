import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { clearUser } from "../../reducers";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(clearUser());
    history.push("/login");
  };

  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      onLogoutSuccess={logout}
    />
  );
}

export default Header;
