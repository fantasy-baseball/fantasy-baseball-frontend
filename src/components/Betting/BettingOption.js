import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BettingInfo from "../BettingInfo";
import Slider from "../Shared/Slider";
import Button from "../Shared/Button";

const Wrapper = styled.article`
  width: 100%;
  margin: auto 0 0 0;
  padding: ${({ theme }) => theme.padding.base};
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoList = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

function BettingOption(props) {
  const {
    userMoney,
    bettingMoney,
    handleBettingMoney,
    submitBetting
  } = props;

  return (
    <Wrapper>
      <Slider
        minValue={0}
        maxValue={userMoney}
        step={100}
        value={bettingMoney}
        handleChange={handleBettingMoney}
      />
      <InfoList>
        <BettingInfo />
        <Button
          type="submit"
          title="BETTING"
          color="blue"
          size="small"
          handleClick={submitBetting}
        />
      </InfoList>
    </Wrapper>
  );
}

BettingOption.propTypes = {
  userMoney: PropTypes.number.isRequired,
  bettingMoney: PropTypes.number.isRequired,
  handleBettingMoney: PropTypes.func.isRequired,
  submitBetting: PropTypes.func.isRequired,
};

export default BettingOption;
