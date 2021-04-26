import React from "react";
import styled, { useTheme } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";
import LoadingTable from "./LoadingTable";
import LoadingBettingOption from "./LoadingBettingOption";

const Wrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.padding.base};
  background-color: ${({ theme }) => theme.skeletonColor.background};
`;

const LoadingEntryWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function index() {
  const theme = useTheme();

  return (
    <Wrapper>
      <SkeletonTheme
        color={theme.skeletonColor.skeleton}
        highlightColor={theme.skeletonColor.highlight}
      >
        <LoadingEntryWrapper>
          <LoadingTable />
          <LoadingBettingOption />
        </LoadingEntryWrapper>
      </SkeletonTheme>
    </Wrapper>
  );
}

export default index;
