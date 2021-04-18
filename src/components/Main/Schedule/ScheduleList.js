import React from "react";
import styled from "styled-components";
import ScheduleListEntry from "./ScheduleListEntry";

const Wrapper = styled.div`
  width: calc(100% - 350px);
  min-width: 1200px;
  position: relative;
`;

const List = styled.div`
  width: 100%;
  height: 180px;
  background: ${({ theme }) => theme.color.white};
  display: flex;
`;

function ScheduleList() {
  return (
    <Wrapper>
      <h2 className="english-title">TODAY GAMES</h2>
      <List>
        <ScheduleListEntry />
        <ScheduleListEntry />
        <ScheduleListEntry />
        <ScheduleListEntry />
        <ScheduleListEntry />
      </List>
    </Wrapper>
  );
}

export default ScheduleList;
