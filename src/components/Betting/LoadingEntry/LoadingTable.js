import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  line-height: 30px;
`;

const LoadingTableContent = styled.div`
  margin-top: 1rem;
  padding: 10px;
  background-color: ${({ theme }) => theme.skeletonColor.box};
  border-radius: 5px;
`;

function LoadingTable() {
  return (
    <Wrapper>
      <Skeleton
        width="100%"
        height={40}
      />
      <LoadingTableContent>
        <Skeleton
          width="100%"
          height={30}
          count={10}
        />
      </LoadingTableContent>
    </Wrapper>
  );
}

export default LoadingTable;
