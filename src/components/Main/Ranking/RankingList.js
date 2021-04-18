import React from "react";
import styled from "styled-components";
import playerImage from "../../../assets/images/player_image.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 350px;
  padding: ${({ theme }) => theme.padding.middle};
  background: ${({ theme }) => theme.color.white};
`;

const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.middle};
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
`;

const TitleInfo = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.lightgrey};
`;

const FirstPlayer = styled.div`
  width: 100%;
  margin: 1rem 0 0 0;
  display: flex;
  align-items: center;
`;

const Info = styled.ul`
  width: 100%;
  margin: 0 0 0 1rem;

  li {
    margin: 0 0 0.3rem 0;
  }

  li:first-child {
    font-size: 2rem;
    color: ${({ theme }) => theme.color.blue};
  }

  li:nth-child(2) {
    font-size: 1.3rem;
    font-weight: bold;
  }

  li:nth-child(3) {
    font-size: 0.7rem;
  }

  li:last-child {
    padding: 0.3rem;
    display: inline-block;
    background: ${({ theme }) => theme.color.blue};
    font-size: 1rem;
    color: ${({ theme }) => theme.color.white};
  }
`;

const PlayerImage = styled.img`
  width: 90px;
  height: 115px;
  border: 1px solid ${({ theme }) => theme.color.lightgrey};
`;

const OtherPlayers = styled.ul`
  margin: 1rem 0 0 0;
`;

const Player = styled.li`
  display: flex;
  line-height: 1.9rem;

  span {
    margin: 0 0.5rem 0 0;
  }

  span:nth-child(3) {
    color: ${({ theme }) => theme.color.grey};
  }

  span:last-child {
    margin: 0 0 0 auto;
  }
`;

function PlayersRankingList() {
  return (
    <Wrapper>
      <Title>
        유저들이 선택한 TOP 5
        <TitleInfo>* 어제자 기준</TitleInfo>
      </Title>
      <FirstPlayer>
        <PlayerImage src={playerImage} />
        <Info>
          <li>1</li>
          <li>강동연</li>
          <li>NC 다이노스</li>
          <li>431 명</li>
        </Info>
      </FirstPlayer>
      <OtherPlayers>
        <Player>
          <span>1</span>
          <span>수아레즈</span>
          <span>LG</span>
          <span>425 명</span>
        </Player>
        <Player>
          <span>1</span>
          <span>수아레즈</span>
          <span>LG</span>
          <span>420 명</span>
        </Player>
        <Player>
          <span>1</span>
          <span>수아레즈</span>
          <span>LG</span>
          <span>150 명</span>
        </Player>
        <Player>
          <span>1</span>
          <span>수아레즈</span>
          <span>LG</span>
          <span>110 명</span>
        </Player>
      </OtherPlayers>
    </Wrapper>
  );
}

export default PlayersRankingList;
