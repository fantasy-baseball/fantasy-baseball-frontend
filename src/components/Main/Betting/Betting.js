import React from "react";
import styled from "styled-components";
import Button from "../../Shared/Button";

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

function Betting() {
  return (
    <Wrapper>
      <h2 className="hidden">BETTING COUNTDOWN</h2>
      <Countdown>
        GAME START COUNTDOWN
        <Timer>
          09:15:45
        </Timer>
      </Countdown>
      <Button
        type="button"
        title="BETTING START"
        color="white"
      />
    </Wrapper>
  );
}

export default Betting;
