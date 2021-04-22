import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { clearUser } from "../../actions/user";

const Wrapper = styled.div`
  height: 70px;
  padding: ${({ theme }) => theme.padding.base};
  border-bottom: 1px solid ${({ theme }) => theme.color.grey};
  display: flex;
  align-items: center;
  font-family: "Bebas Neue";
  color: ${({ theme }) => theme.color.white};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.bigger};
`;

const User = styled.span`
  margin: 0 0 0 1rem;
  font-family: "Nanum Barun Gothic";
`;

const ButtonList = styled.ul`
  margin: 0 0 0 auto;
  display: flex;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.middle};
  color: ${({ theme }) => theme.color.grey};

  li:hover {
    color: ${({ theme }) => theme.color.white};
  }
`;

const Button = styled.button`
  margin: 0;
  padding: 0;
  background: transparent;
  border: transparent;
  font-family: "Bebas Neue";
  font-size: ${({ theme }) => theme.fontSize.middle};
  line-height: 1rem;
  color: ${({ theme }) => theme.color.grey};

  &:hover {
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
  }
`;

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.user.user);

  const logout = () => {
    dispatch(clearUser());
    history.push("/login");
  };

  return (
    <Wrapper>
      <Title>
        <Link to="/">FANTASY BASEBALL</Link>
      </Title>
      <User>{`HELLO, ${name}`}</User>
      <ButtonList>
        <li>
          <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <Button
                type="button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Logout
              </Button>
            )}
            onLogoutSuccess={logout}
          />
        </li>
        <li>
          <Link to="/history">BETTING HISTORY</Link>
        </li>
      </ButtonList>
    </Wrapper>
  );
}

export default Header;
