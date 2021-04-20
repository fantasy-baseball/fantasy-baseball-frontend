import React from "react";
import styled from "styled-components";

const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  background: yellow;
`;

function MainLoading() {
  return (
    <Loading>
      Loading...
    </Loading>
  );
}

export default MainLoading;
