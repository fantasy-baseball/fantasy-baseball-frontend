import React from "react";
import styled, { useTheme } from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Wrapper = styled.div`
  width: calc(100vw - 332px);
  height: 100%;
  background-color: ${({ theme }) => theme.skeletonColor.background};
  display: flex;
  justify-content: center;
  line-height: 30px;
`;

const LoadingHistoryWrapper = styled.div`
  width: calc(100vw - 348px);
  padding: ${({ theme }) => theme.padding.base};
  background-color: ${({ theme }) => theme.skeletonColor.background};
  display: flex;
  flex-flow: column;
`;

const LoadingHistoryTable = styled.div`
  width: 100%;
  margin-top: 16px;
  padding: ${({ theme }) => theme.padding.base};
  background-color: ${({ theme }) => theme.skeletonColor.box};
  border-radius: 5px;
  display: flex;
  flex-flow: column;
`;

function LoadingHistory() {
  const theme = useTheme();

  return (
    <Wrapper>
      <SkeletonTheme
        color={theme.skeletonColor.skeleton}
        highlightColor={theme.skeletonColor.highlight}
      >
        <LoadingHistoryWrapper>
          <Skeleton
            width="100%"
            height={40}
          />
          <LoadingHistoryTable>
            <Skeleton
              width="100%"
              height={30}
              count={10}
            />
          </LoadingHistoryTable>
        </LoadingHistoryWrapper>
      </SkeletonTheme>
    </Wrapper>
  );
}

export default LoadingHistory;
