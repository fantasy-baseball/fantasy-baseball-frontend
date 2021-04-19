import React, { useState } from "react";
import styled from "styled-components";
import RankingList from "./RankingList";

// TODO : test data - 삭제 예정
const content = {
  users: {
    title: "유저 랭킹 TOP5",
    list: [
      {
        name: "유저1",
        users: 45112345,
        imag_url: "http://example.com",
      },
      {
        name: "강동연",
        users: 451321,
        imag_url: "http://example.com",
      },
      {
        name: "강동연",
        users: 45132,
        imag_url: "http://example.com",
      },
      {
        name: "강동연",
        users: 451,
        imag_url: "http://example.com",
      },
      {
        name: "강동연",
        users: 400,
        imag_url: "http://example.com",
      },
    ],
  },
  pitchers: {
    title: "유저들이 선택한 투수 TOP5",
    list: [
      {
        name: "수아레즈",
        teamName: "NC",
        users: 451,
        imag_url: "http://example.com",
      },
      {
        name: "수아레즈",
        teamName: "NC",
        users: 451,
        imag_url: "http://example.com",
      },
      {
        name: "수아레즈",
        teamName: "NC",
        users: 451,
        imag_url: "http://example.com",
      },
      {
        name: "수아레즈",
        teamName: "NC",
        users: 451,
        imag_url: "http://example.com",
      },
      {
        name: "수아레즈",
        teamName: "NC",
        users: 451,
        imag_url: "http://example.com",
      },
    ],
  },
  hitters: {
    title: "유저들이 선택한 타자 TOP5",
    list: [
      {
        name: "김현수",
        teamName: "NC",
        users: 451,
        imag_url: "http://example.com",
      },
      {
        name: "김현수",
        teamName: "NC",
        users: 451,
        imag_url: "http://example.com",
      },
      {
        name: "김현수",
        teamName: "NC",
        users: 451,
        imag_url: "http://example.com",
      },
      {
        name: "김현수",
        teamName: "NC",
        users: 451,
        imag_url: "http://example.com",
      },
      {
        name: "김현수",
        teamName: "NC",
        users: 451,
        imag_url: "http://example.com",
      },
    ],
  },
};

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

function Ranking() {
  const [tabList, setTabList] = useState(TABS);
  const [tabContent, setTabContent] = useState(content.users);

  const handleTabClick = (event) => {
    const tabName = event.currentTarget.textContent;

    setTabList((prevTabList) => {
      const selectedIndex = prevTabList.findIndex((tab) => tab.name === tabName);
      const newTabList = prevTabList.map((tab, index) => {
        if (index === selectedIndex) {
          tab.isActive = true;
        } else {
          tab.isActive = false;
        }
        return tab;
      });
      return newTabList;
    });

    setTabContent(content[tabName]);
  };

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
      <RankingList data={tabContent} />
    </Wrapper>
  );
}

export default Ranking;
