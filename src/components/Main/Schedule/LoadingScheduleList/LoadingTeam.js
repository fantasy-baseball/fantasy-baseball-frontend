import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

const Wrapper = styled.div`
  height: 100%;
  width: 50%;
  padding: 10px 0;
  display: flex;
  flex-flow: nowrap column;
  justify-content: space-between;
  text-align: center;
`;

function LoadingTeam() {
  return (
    <Wrapper>
      <Skeleton
        circle={true}
        width={65}
        height={65}
      />
      <Skeleton
        count={2}
        width={80}
        height={15}
      />
    </Wrapper>
  );
}

export default LoadingTeam;
