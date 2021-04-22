import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles";
import GlobalFonts from "../../styles/fonts";
import theme from "../../styles/theme";
import Main from "../Main";
import Login from "../Login";
import Betting from "../Betting";
import Header from "../Header";
import Modal from "../Shared/Modal";
import { checkUser } from "../../actions/login";

const Wrapper = styled.div`
  width: 100%;
  min-width: 1200px;
`;

const Layout = styled.main`
  width: 100%;
  height: auto;
`;

function App() {
  const { user } = useSelector((state) => state.login);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const history = useHistory();

  const checkUserLogin = () => {
    if (document.cookie.indexOf("access_token") === -1) {
      history.push("/login");
      return;
    }

    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token"))
      .split("=")[1];

    dispatch(checkUser(token));
  };

  useEffect(() => {
    checkUserLogin();
  }, []);

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <GlobalFonts />
        <Layout>
          {user
            ? (
              <>
                <Header />
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Main
                      isModalVisible={modal.isVisible}
                    />
                  )}
                />
                <Route path="/betting" component={Betting} />
              </>
            )
            : (
              <Route path="/login" component={Login} />
            )}
        </Layout>
        {modal.isVisible
          && (
            <Modal
              title={modal.title}
              contentText={modal.contentText}
              hasLinkButton={modal.hasLinkButton}
              path={modal.path}
              linkButtonText={modal.linkButtonText}
            />
          )}
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
