import React from "react";
import { Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles";
import GlobalFonts from "../../styles/fonts";
import theme from "../../styles/theme";
import Main from "../Main";

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
          <Route path="/" component={Main} />
        </Layout>
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
