import React, { useState } from "react";
import styled from "styled-components";
import SearchEntry from "./SearchEntry";
import Roaster from "../Roaster";
import BettingInfo from "../BettingInfo";
import Slider from "../Shared/Slider";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
`;

const BettingWrapper = styled.section`
  width: calc(100% - 12 * 7vmin);
  height: calc(100vh - 70px);
  padding: ${({ theme }) => theme.padding.base};
  display: flex;
  flex-direction: column;
`;

const RoasterWrapper = styled.section`
  width: calc(12 * 7vmin);
  height: calc(100vh - 70px);
`;

const BettingMoney = styled.article`
  width: 100%;
  margin: auto 0 0 0;
  padding: ${({ theme }) => theme.padding.base};
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Betting() {
  const [bettingMoney, setBettingMoney] = useState(500);

  const handleBettingMoney = (event) => {
    const { value } = event.target;
    setBettingMoney(value);
  };

  return (
    <Wrapper>
      <BettingWrapper>
        <SearchEntry />
        <BettingMoney>
          <Slider
            minValue={500}
            maxValue={5000}
            step={100}
            value={bettingMoney}
            handleChange={handleBettingMoney}
          />
          <BettingInfo />
        </BettingMoney>
      </BettingWrapper>
      <RoasterWrapper>
        <h2 className="hidden">로스터 선택하기</h2>
        <Roaster />
      </RoasterWrapper>
    </Wrapper>
  );
}

export default Betting;
