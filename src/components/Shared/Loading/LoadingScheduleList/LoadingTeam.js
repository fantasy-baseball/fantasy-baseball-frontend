import React from "react";
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Wrapper = styled.div`
  height: 100%;
  width: 50%;
  padding-top: 15px;
  display: flex;
  flex-flow: nowrap column;
  justify-content: space-between;
  text-align: center;
`;

function LoadingTeam() {
  return (
    <Wrapper>
      <SkeletonTheme
        color="#c7c7c7"
        highlightColor="#d4d4d4"
      >
        <Skeleton
          circle={true}
          width={65}
          height={65}
          style={{ marginBottom: "10px" }}
        />
        <Skeleton
          count={2}
          width={80}
          height={15}
        />
      </SkeletonTheme>
    </Wrapper>
  );
}

export default LoadingTeam;
