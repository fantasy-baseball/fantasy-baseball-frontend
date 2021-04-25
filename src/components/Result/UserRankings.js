import React, { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import LinkButton from "../Shared/LinkButton";
import BettingInfo from "../BettingInfo";
import RankingTable from "./RankingTable";
import Ranking from "../Main/Ranking/Ranking";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const InfoBox = styled.div`
  margin: auto 0 0 0;
  padding: ${({ theme }) => theme.padding.base};
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const InfoBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BettingResult = styled.div`
  width: 100%;
  margin: 0 0 1rem 0;
  padding: ${({ theme }) => theme.padding.base};
  background: rgba(0, 0, 0, 0.05);
  font-size: ${({ theme }) => theme.fontSize.base};

  strong {
    margin: 0 0.5rem 0 0;
    padding: 0.3rem 0.5rem;
    background: ${({ theme }) => theme.color.blue};
    font-family: "Bebas Neue";
    color: ${({ theme }) => theme.color.white};
  }

  span {
    padding: 0 0.3rem;
  }
`;

const findUserRanking = (email, rankings) => {
  const userIndex = rankings.findIndex((ranking) => ranking.user.email === email);
  return rankings.slice(userIndex - 2, userIndex + 3);
};

const getUserBettingInfo = (email, rankings) => {
  const userBetting = rankings.find((ranking) => ranking.user.email === email);

  if (userBetting === undefined) return null;

  return {
    earnedMoney: userBetting.earnedMoney,
    bettingMoney: userBetting.bettingMoney,
    result: userBetting.earnedMoney - userBetting.bettingMoney,
  };
};

function UserRankings({ userRankings }) {
  const user = useSelector((state) => state.login.user);
  const [topRankers, setTopRankers] = useState(userRankings.slice(0, 3));
  const [myRanking, setMyRanking] = useState(
    findUserRanking(user.email, userRankings)
  );
  const [bettingResult, setBettingResult] = useState(
    getUserBettingInfo(user.email, userRankings)
  );

  return (
    <Wrapper>
      <RankingTable
        title="TOP RANKERS"
        rankings={topRankers}
      />
      <RankingTable
        title="MY RANKING"
        rankings={myRanking}
      />
      <InfoBox>
        {bettingResult
          && (
            <BettingResult>
              <strong>RESULT</strong>
              {bettingResult.earnedMoney}
              <span>-</span>
              {bettingResult.bettingMoney}
              <span>=</span>
              {bettingResult.earnedMoney - bettingResult.bettingMoney}
            </BettingResult>
          )}
        <InfoBottom>
          <BettingInfo />
          <LinkButton
            path="/"
            type="button"
            title="GO TO MAIN"
            color="blue"
            size="small"
          />
        </InfoBottom>
      </InfoBox>
    </Wrapper>
  );
}

UserRankings.propTypes = {
  userRankings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserRankings;
