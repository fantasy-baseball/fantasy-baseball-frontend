import React from "react";
import styled from "styled-components";
import LoadingTeam from "./LoadingTeam";

const Wrapper = styled.div`
  width: 19%;
  height: 160px;
  background-color: #e0e0e0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;

function LoadingScheduleListEntry() {
  return (
    <Wrapper>
      <LoadingTeam />
      <LoadingTeam />
    </Wrapper>
  );
}

export default LoadingScheduleListEntry;
