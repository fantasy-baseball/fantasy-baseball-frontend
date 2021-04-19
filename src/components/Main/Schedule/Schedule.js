import React from "react";
import styled from "styled-components";
import dateUtil from "../../../utils/date";
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
    background: ${({ theme }) => theme.color.blue};
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
  font-family: "Bebas Neue";
  font-size: ${({ theme }) => theme.fontSize.biggest};
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.color.white};
`;

export default function Schedule() {
  const today = dateUtil.formatDate(new Date(), "yyyy-MM-dd-eee");

  return (
    <Wrapper>
      <DateBox>
        <p>{today.substring(0, 4)}</p>
        <p>
          {`${today.substring(5, 7)}/${today.substring(8, 10)}`}
        </p>
        <p>{today.substring(11, 14)}</p>
      </DateBox>
      <ScheduleList />
    </Wrapper>
  );
}
