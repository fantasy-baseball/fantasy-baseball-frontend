import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

const Wrapper = styled.div`
  line-height: 30px;
`;

function LoadingOthers() {
  return (
    <Wrapper>
      <Skeleton
        width={400}
        height={20}
      />
      <Skeleton
        width={400}
        height={20}
      />
      <Skeleton
        width={400}
        height={20}
      />
      <Skeleton
        width={400}
        height={20}
      />
    </Wrapper>
  );
}

export default LoadingOthers;
