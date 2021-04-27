import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import produce from "immer";
import styled from "styled-components";
import { fetchPositionRankings } from "../../api/game";
import { handleTabClick } from "../../utils";
import Notification from "../Notification";
import Chart from "./Chart";
import {
  STATISTIC_TAB_CONTENT,
  STATISTIC_TABS,
  PLAYER_POSITIONS,
} from "../../constants";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChartWrapper = styled.article`
  width: 100%;
  height: 100vh;
  display: flex;
  color: white;
`;

const ChartTabs = styled.ul`
  width: 150px;
  height: 100vh;
  padding: ${({ theme }) => theme.padding.base};
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Tab = styled.li`
  width: 100%;
  height: auto;
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.base};
  text-align: center;
  color: ${({ theme }) => theme.color.lightgrey};
  cursor: pointer;

  &.active {
    padding: ${({ theme }) => theme.padding.small};
    background: ${({ theme }) => theme.color.blue};
    font-size: 1.2em;
    color: ${({ theme }) => theme.color.white};
  }
`;

const Error = styled.div`
  width: 100%;
  height: 350px;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Statistic() {
  const [tabList, setTabList] = useState(STATISTIC_TABS);
  const [tabContent, setTabContent] = useState(STATISTIC_TAB_CONTENT);
  const [tabName, setTabName] = useState("firstBaseman");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { gameDate } = useParams();

  useEffect(() => {
    const getPositionRankings = async () => {
      setIsLoading(true);
      try {
        const fetchedPositionRankings = await fetchPositionRankings(gameDate);

        if (fetchedPositionRankings?.result === "none") {
          setError("해당 날짜의 통계가 존재하지 않습니다.");
          setIsLoading(false);
          return;
        }

        setTabContent(
          produce((draft) => {
            fetchedPositionRankings.forEach((position) => {
              draft[PLAYER_POSITIONS[position._id]] = position.players;
            });
          })
        );

        setIsLoading(false);
      } catch (err) {
        setError("데이터 로드에 실패하였습니다.");
        setIsLoading(false);
      }
    };

    getPositionRankings();
  }, []);

  return (
    <Wrapper>
      {error
        ? (
          <Notification
            icon="📊❌"
            title="FAIL TO LOAD DATA"
            text={error}
          />
        )
        : (
          <ChartWrapper>
            <ChartTabs>
              {tabList.map((tab, index) => (
                <Tab
                  key={index}
                  data-tab={tab.name}
                  onClick={(event) => handleTabClick(event, setTabList, setTabName)}
                  className={tab.isActive ? "active" : ""}
                >
                  {tab.title}
                </Tab>
              ))}
            </ChartTabs>
            {isLoading
              ? <p>로딩중</p>
              : (tabContent[tabName].length > 0
                && <Chart positionRankings={tabContent[tabName]} />)}
          </ChartWrapper>
        )}
    </Wrapper>
  );
}

export default Statistic;
