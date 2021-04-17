import React from "react";
import styled from "styled-components";
import ScheduleList from "./ScheduleList";

const Wrapper = styled.article`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  &::before {
    width: 480px;
    height: 240px;
    background: ${({ theme }) => theme.colors.blue};
    display: block;
    position: absolute;
    bottom: 10px;
    left: 0;
    content: "";
  }
`;

const DateBox = styled.div`
  padding: 30px 30px 0 0;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.biggest};
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.white};
`;

export default function Schedule() {
  return (
    <Wrapper>
      <DateBox>
        <p>2021</p>
        <p>04/14</p>
        <p>WED</p>
      </DateBox>
      <ScheduleList />
    </Wrapper>
  );
}
