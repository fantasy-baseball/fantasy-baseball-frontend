import React from "react";
import styled from "styled-components";
import LoadingScheduleList from "./LoadingScheduleList";

const Wrapper = styled.div`
  width: calc(100% - 350px);
  min-width: 1200px;
  position: relative;
`;

function LoadingSchedule() {
  return (
    <Wrapper>
      <h2 className="english-title">TODAY GAMES</h2>
      <LoadingScheduleList />
    </Wrapper>
  );
}

export default LoadingSchedule;
