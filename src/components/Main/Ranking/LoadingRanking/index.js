import React from "react";
import styled, { useTheme } from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import LoadingRankingList from "./LoadingRankingList";
import LoadingOthers from "./LoadingOthers";

const Wrapper = styled.div`
  width: 100%;
  height: 350px;
  padding: ${({ theme }) => theme.padding.middle};
  background: ${({ theme }) => theme.skeletonColor.box};
`;

function index() {
  const theme = useTheme();

  return (
    <Wrapper>
      <SkeletonTheme
        color={theme.skeletonColor.skeleton}
        highlightColor={theme.skeletonColor.highlight}
      >
        <Skeleton
          width={160}
          height={30}
        />
        <LoadingRankingList />
        <LoadingOthers />
      </SkeletonTheme>
    </Wrapper>
  );
}

export default index;
