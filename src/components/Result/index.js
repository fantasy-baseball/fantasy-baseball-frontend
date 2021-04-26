import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchUserRankings, fetchRoaster } from "../../api/game";
import UserRankings from "./UserRankings";
import Roaster from "../Roaster";
import Notification from "../Notification";
import { EMPTY_ROASTER } from "../../constants";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RankingsWrapper = styled.section`
  width: calc(100% - 12 * 7vmin);
  height: calc(100vh - 70px);
  padding: ${({ theme }) => theme.padding.base};
  display: flex;
  flex-direction: column;
`;

const RoasterWrapper = styled.section`
  width: calc(12 * 7vmin);
  height: calc(100vh - 70px);
`;

function Result() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userRankings, setUserRankings] = useState([]);
  const [roaster, setRoaster] = useState(EMPTY_ROASTER);
  const { gameDate } = useParams();

  useEffect(() => {
    const getUserRankings = async () => {
      try {
        setIsLoading(true);
        const fetchedRankings = await fetchUserRankings(gameDate);

        if (fetchedRankings.result === "none") {
          setError("날짜에 해당하는 베팅 결과가 존재하지 않습니다.");
          setIsLoading(false);
          return;
        }

        const fetchedRoaster = await fetchRoaster(gameDate);

        if (fetchedRoaster.result === "none") {
          setError("날짜에 해당하는 로스터가 존재하지 않습니다.");
          setIsLoading(false);
          return;
        }

        setUserRankings(fetchedRankings);
        setRoaster(fetchedRoaster);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError("결과 정보를 불러올 수 없습니다. 다시 시도해주세요.");
      }
    };

    getUserRankings();
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
            <RankingsWrapper>
              {isLoading
                ? <p>로딩중</p>
                : (userRankings.length > 0
                  && (
                    <UserRankings
                      userRankings={userRankings}
                      gameDate={gameDate}
                    />
                  )
                )}
            </RankingsWrapper>
            <RoasterWrapper>
              {isLoading
                ? <p>로스터 로딩중</p>
                : (
                  <>
                    <h2 className="hidden">선택한 로스터</h2>
                    <Roaster
                      roaster={roaster}
                    />
                  </>
                )}
            </RoasterWrapper>
          </>
        )}
    </Wrapper>
  );
}

export default Result;
