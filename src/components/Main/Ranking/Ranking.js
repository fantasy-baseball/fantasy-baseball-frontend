import React, { useState, useEffect } from "react";
import produce from "immer";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getUserRankings, getPlayerRankings } from "../../../actions/todayGame";
import { fetchUserRankings, fetchPlayerRankings } from "../../../api/game";
import { formatDate, subDate } from "../../../utils/date";
import RankingList from "./RankingList";
import LoadingRanking from "./LoadingRanking";
import { TAB_CONTENT, TABS } from "../../../constants";

const Wrapper = styled.article`
  width: 450px;
  height: 450px;
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
  font-size: ${({ theme }) => theme.fontSize.middle};
  text-align: center;
  color: ${({ theme }) => theme.color.grey};
  cursor: pointer;

  &.active span {
    padding: 0 ${({ theme }) => theme.padding.small};
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

function Ranking() {
  const [tabList, setTabList] = useState(TABS);
  const [tabName, setTabName] = useState("users");
  const [tabContent, setTabContent] = useState(TAB_CONTENT);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    userRankings,
    hitterRankings,
    pitcherRankings,
  } = useSelector((state) => state.todayGame);
  const dispatch = useDispatch();
  const today = new Date();

  const handleTabClick = (event) => {
    const currentTabName = event.currentTarget.textContent;

    setTabList((prevTabList) => {
      const selectedIndex = prevTabList.findIndex((tab) => tab.name === currentTabName);
      const newTabList = prevTabList.map((tab, index) => {
        const currentTab = { ...tab };

        if (index === selectedIndex) {
          currentTab.isActive = true;
        } else {
          currentTab.isActive = false;
        }

        return currentTab;
      });

      return newTabList;
    });

    setTabName(currentTabName);
  };

  useEffect(() => {
    if (userRankings.length < 1) {
      setIsLoading(true);
      dispatch(getUserRankings(formatDate(subDate(today, 1), "yyyyMMdd")));
    }

    if (userRankings?.result === "none") {
      setTabContent(
        produce((draft) => {
          draft.users.error = "유저 랭킹 정보가 존재하지 않습니다.";
        })
      );
      setIsLoading(false);
      return;
    }

    if (userRankings === undefined) {
      setError("데이터 로드에 실패하였습니다.");
      setIsLoading(false);
    }

    setTabContent(
      produce((draft) => {
        draft.users.list = userRankings;
      })
    );

    setIsLoading(false);
  }, [userRankings]);

  useEffect(() => {
    if (hitterRankings.length < 1 || pitcherRankings.length < 1) {
      setIsLoading(true);
      dispatch(getPlayerRankings(formatDate(subDate(today, 1), "yyyyMMdd")));
    }

    if (hitterRankings?.result === "none") {
      setTabContent(
        produce((draft) => {
          draft.hitters.error = "타자 랭킹 정보가 존재하지 않습니다.";
        })
      );
    }

    if (pitcherRankings?.result === "none") {
      setTabContent(
        produce((draft) => {
          draft.pitchers.error = "투수 랭킹 정보가 존재하지 않습니다.";
        })
      );
    }

    if (!hitterRankings || !pitcherRankings) {
      setError("데이터 로드에 실패하였습니다.");
      setIsLoading(false);
      return;
    }

    setTabContent(
      produce((draft) => {
        draft.hitters.list = hitterRankings;
        draft.pitchers.list = pitcherRankings;
      })
    );

    setIsLoading(false);
  }, [pitcherRankings, hitterRankings]);

  return (
    <Wrapper>
      <h2 className="hidden">TODAY RANKINGS</h2>
      <Tabs>
        {tabList.map((tab, index) => (
          <Tab
            key={index}
            onClick={handleTabClick}
            className={tab.isActive ? "active" : ""}
          >
            <span>{tab.name}</span>
          </Tab>
        ))}
      </Tabs>
      {error
        ? <Error>{error}</Error>
        : (
          isLoading
            ? <LoadingRanking />
            : <RankingList data={tabContent[tabName]} />
        )}
    </Wrapper>
  );
}

export default Ranking;
