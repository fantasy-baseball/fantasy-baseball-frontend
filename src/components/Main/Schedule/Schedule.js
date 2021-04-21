import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getSchedule } from "../../../actions/todayGame";
import { formatDate } from "../../../utils/date";
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

const LoadingTest = styled.div`
  width: 100%;
  height: 150px;
  background: yellow;
  color: blue;
`;

export default function Schedule() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const schedule = useSelector((state) => state.todayGame.schedule);
  const dispatch = useDispatch();

  const today = formatDate(new Date(), "yyyy-MM-dd-eee");

  useEffect(() => {
    if (schedule.length < 1) {
      setIsLoading(true);
      dispatch(getSchedule());
      return;
    }

    if (schedule.result === "failure") {
      setError(schedule.message);
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
  }, [schedule]);

  return (
    <Wrapper>
      {isLoading
        ? <LoadingTest>로딩중입니다.</LoadingTest>
        : (
          <>
            <DateBox>
              <p>{today.substring(0, 4)}</p>
              <p>
                {`${today.substring(5, 7)}/${today.substring(8, 10)}`}
              </p>
              <p>{today.substring(11, 14)}</p>
            </DateBox>
            <ScheduleList
              schedule={schedule}
              error={error}
            />
          </>
        )}
    </Wrapper>
  );
}
