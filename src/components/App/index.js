import React from "react";
import { Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles";
import GlobalFonts from "../../styles/fonts";
import theme from "../../styles/theme";
import Main from "../Main";
import Login from "../Login";
import Betting from "../Betting";
import Header from "../Header";

const Wrapper = styled.div`
  width: 100%;
  min-width: 1200px;
`;

const Layout = styled.main`
  width: 100%;
  height: auto;
`;

function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <GlobalFonts />
        <Layout>
          <Header />
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/betting" component={Betting} />
        </Layout>
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
