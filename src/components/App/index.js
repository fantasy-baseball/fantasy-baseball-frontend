import React, { useEffect, useState } from "react";
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
import { checkUser } from "../../actions/user";

const Wrapper = styled.div`
  width: 100%;
  min-width: 1200px;
`;

const Layout = styled.main`
  width: 100%;
  height: auto;
`;

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { user } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

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

  const setIsVisible = (bool) => {
    setIsModalVisible(bool);
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
                      isModalVisible={isModalVisible}
                      setIsVisible={setIsVisible}
                    />
                  )}
                />
                <Route path="/betting" component={Betting} />
              </>
            )
            : (
              <Route
                path="/login"
                render={() => <Login setIsVisible={setIsVisible} />}
              />
            )}
        </Layout>
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
