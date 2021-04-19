import React from "react";
import PropTypes from "prop-types";
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

const FirstRank = styled.div`
  width: 100%;
  margin: 1rem 0 0 0;
  display: flex;
  align-items: center;
`;

const FirstRankInfo = styled.ul`
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

const Image = styled.img`
  width: 90px;
  height: 115px;
  border: 1px solid ${({ theme }) => theme.color.lightgrey};
`;

const Others = styled.ul`
  margin: 1rem 0 0 0;
`;

const Rank = styled.li`
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

const renderLowerRanks = (list) => {
  const players = [];
  for (let i = 1; i < list.length; i += 1) {
    players.push(
      <Rank key={`rank-${i}`}>
        <span>{i + 1}</span>
        <span>{list[i].name}</span>
        <span>{list[i]?.team}</span>
        <span>{list[i]?.users}</span>
      </Rank>
    );
  }
  return players;
};

function RankingList({ data }) {
  return (
    <Wrapper>
      <Title>
        {data.title}
        <TitleInfo>* 어제자 기준</TitleInfo>
      </Title>
      <FirstRank>
        <Image src={playerImage} />
        <FirstRankInfo>
          <li>1</li>
          <li>{data.list[0].name}</li>
          <li>{data.list[0]?.teamName}</li>
          <li>431 명</li>
        </FirstRankInfo>
      </FirstRank>
      <Others>
        {renderLowerRanks(data.list)}
      </Others>
    </Wrapper>
  );
}

RankingList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RankingList;
