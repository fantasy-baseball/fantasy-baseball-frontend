import React from "react";
import styled from "styled-components";
import RankingList from "./RankingList";

const Wrapper = styled.article`
  width: 450px;
  height: auto;
  min-height: 600px;
  padding: 50px 0 0 0;
`;

const Tabs = styled.ul`
  width: 100%;
  height: 50px;
  display: flex;
`;

const Tab = styled.li`
  width: 100%;
  height: auto;
  display: inline-block;
  font-family: "Bebas Neue";
  font-size: ${({ theme }) => theme.fontSizes.middle};
  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;

  &.active span {
    padding: 0 ${({ theme }) => theme.paddings.small};
    background: ${({ theme }) => theme.colors.blue};
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.white};
  }
`;

function Ranking() {
  return (
    <Wrapper>
      <Tabs>
        <Tab className="active">
          <span>USERS</span>
        </Tab>
        <Tab>
          <span>PITCHERS</span>
        </Tab>
        <Tab>
          <span>HITTERS</span>
        </Tab>
      </Tabs>
      <RankingList />
    </Wrapper>
  );
}

export default Ranking;
