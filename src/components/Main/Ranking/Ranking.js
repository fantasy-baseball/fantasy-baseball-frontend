import React, { useState, useEffect } from "react";
import produce from "immer";
import styled from "styled-components";
import { fetchUserRankings, fetchPlayerRankings } from "../../../api/game";
import { formatDate, subDate } from "../../../utils/date";
import RankingList from "./RankingList";
import LoadingRanking from "./LoadingRanking";

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

const TAB_CONTENT = {
  users: {
    title: "유저 랭킹 TOP5",
    list: [],
    error: null,
  },
  pitchers: {
    title: "투수 랭킹 TOP5",
    list: [],
    error: null,
  },
  hitters: {
    title: "타자 랭킹 TOP5",
    list: [],
    error: null,
  },
};

const TABS = [
  {
    name: "users",
    isActive: true,
  },
  {
    name: "pitchers",
    isActive: false,
  },
  {
    name: "hitters",
    isActive: false,
  },
];

const refineUserRankings = (userRankings) => {
  userRankings.map((ranking) => {
    const { name, imageUrl } = ranking.user;
    return {
      name,
      earnedMoney: ranking.earnedMoney,
      imageUrl,
      rank: ranking.rank,
    };
  });
};

const refinePlayerRankings = (playerRankings) => (
  playerRankings.map((player) => {
    const { name, team, score } = player;
    const imageUrl = player.playerInfo[0].playerPhotoUrl;
    return {
      name,
      team,
      score,
      imageUrl,
    };
  })
);

function Ranking() {
  const [tabList, setTabList] = useState(TABS);
  const [tabName, setTabName] = useState("users");
  const [tabContent, setTabContent] = useState(TAB_CONTENT);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
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
    const getUserRankings = async () => {
      setIsLoading(true);

      try {
        const fetchedUserRankings = await fetchUserRankings(
          formatDate(subDate(today, 1), "yyyyMMdd")
        );

        if (fetchedUserRankings.result === "none") {
          setTabContent(
            produce((draft) => {
              draft.users.error = "유저 랭킹 정보가 존재하지 않습니다.";
            })
          );
          setIsLoading(false);
          return;
        }

        setTabContent(
          produce((draft) => {
            draft.users.list = refineUserRankings(
              fetchedUserRankings
            ).slice(0, 5);
          })
        );
        setIsLoading(false);
      } catch (err) {
        setError("데이터를 로드에 실패하였습니다.");
        setIsLoading(false);
      }
    };

    const getPlayerRankings = async () => {
      setIsLoading(true);

      try {
        const fetchedPlayerRankings = await fetchPlayerRankings(
          formatDate(subDate(today, 1), "yyyyMMdd")
        );

        if (fetchedPlayerRankings.result === "none") {
          setTabContent(
            produce((draft) => {
              draft.pitchers.error = "투수 랭킹 정보가 존재하지 않습니다.";
              draft.hitters.error = "타자 랭킹 정보가 존재하지 않습니다.";
            })
          );

          setIsLoading(false);
          return;
        }

        setTabContent(
          produce((draft) => {
            draft.pitchers.list = refinePlayerRankings(
              fetchedPlayerRankings.pitchers
            ).slice(0, 5);
            draft.hitters.list = refinePlayerRankings(
              fetchedPlayerRankings.hitters
            ).slice(0, 5);
          })
        );

        setIsLoading(false);
      } catch (err) {
        setError("데이터를 로드에 실패하였습니다.");
        setIsLoading(false);
      }
    };

    getUserRankings();
    getPlayerRankings();
  }, []);

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
