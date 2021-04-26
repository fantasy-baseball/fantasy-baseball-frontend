import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { fetchBettingHistory } from "../../api/game";
import Profile from "./Profile";
import HistoryTable from "./HistoryTable";
import Notification from "../Notification";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HistoryWrapper = styled.section`
  width: calc(100% - 300px);
  height: calc(100vh - 70px);
  padding: ${({ theme }) => theme.padding.base};
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: column;
  color: white;
`;

function History() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [bettingHistory, setBettingHistory] = useState([]);
  const {
    name,
    email,
    money,
    imageUrl
  } = useSelector((state) => state.login.user);

  useEffect(() => {
    const getBettingHistory = async () => {
      try {
        setIsLoading(true);
        const fetchedBettingHistory = await fetchBettingHistory();

        if (fetchBettingHistory.result !== "none") {
          setBettingHistory(fetchedBettingHistory);
        }

        setIsLoading(false);
      } catch (err) {
        setError("베팅 이력을 불러올 수 없습니다. 다시 시도해주세요.");
      }
    };
    getBettingHistory();
  }, []);

  return (
    <Wrapper>
      {error
        ? (
          <Notification
            icon="😢"
            title="FAIL TO LOAD DATA"
            text={error}
          />
        )
        : (
          <>
            <Profile
              name={name}
              email={email}
              money={money}
              imageUrl={imageUrl}
            />
            <HistoryWrapper>
              {isLoading
                ? <div>로딩중</div>
                : bettingHistory.length
                  ? (
                    <HistoryTable
                      history={bettingHistory}
                    />
                  )
                  : (
                    <Notification
                      icon="⚠️"
                      title="NO BETTING HISTORY"
                      text="아직 베팅이력이 없습니다."
                    />
                  )}
            </HistoryWrapper>
          </>
        )}
    </Wrapper>
  );
}

export default History;
