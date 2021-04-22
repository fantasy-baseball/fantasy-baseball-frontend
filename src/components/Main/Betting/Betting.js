import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { formatDate, countTime } from "../../../utils/date";
import LinkButton from "../../Shared/LinkButton";

const Wrapper = styled.article`
  width: 100%;
  height: auto;
  padding: 80px 1rem 0 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Countdown = styled.div`
  margin: 0 0 0 30px;
  display: inline-block;
  font-family: "Bebas Neue";
  font-size: 3rem;
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.color.white};
  position: relative;

  &::before {
    width: 200px;
    height: 3.5rem;
    background: ${({ theme }) => theme.color.blue};
    display: block;
    position: absolute;
    top: -5px;
    right: -5px;
    z-index: -1;
    content: "";
  }
`;

const Timer = styled.span`
  margin: 0 0 0 1rem;
`;

const GAME_START_TIME = {
  weekdays: "17:30:00",
  saturday: "16:00:00",
  sunday: "13:00:00",
};

function Betting() {
  const [today, setToday] = useState(new Date());
  const [isBettingOpened, setIsBettingOpened] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderTime = () => {
    let todayStartTime;

    switch (today.getDay()) {
      case 5:
        todayStartTime = GAME_START_TIME.saturday;
        break;
      case 6:
        todayStartTime = GAME_START_TIME.sunday;
        break;
      default:
        todayStartTime = GAME_START_TIME.weekdays;
    }

    if (isBettingOpened === false) {
      return (
        <Timer>
          00:00:00
        </Timer>
      );
    }

    const formatToday = formatDate(today, "MMMM d, yyyy");
    const {
      hours,
      minutes,
      seconds,
    } = countTime(
      new Date(today),
      new Date(`${formatToday} ${todayStartTime}`)
    );

    if (hours === "00" && minutes === "00" && seconds === "00") {
      setIsBettingOpened(false);
    }

    return (
      <Timer>
        {`${hours}:${minutes}:${seconds}`}
      </Timer>
    );
  };

  return (
    <Wrapper>
      <h2 className="hidden">BETTING COUNTDOWN</h2>
      <Countdown>
        BETTING START COUNTDOWN
        {renderTime()}
      </Countdown>
      <LinkButton
        path="/betting"
        type="button"
        title="BETTING START"
        color="white"
        size="base"
      />
    </Wrapper>
  );
}

export default Betting;
