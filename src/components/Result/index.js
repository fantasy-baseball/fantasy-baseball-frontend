import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchUserRankings } from "../../api/game";
import UserRankings from "./UserRankings";
import Roaster from "../Roaster";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  const [isLoading, setIsLoading] = useState(false);
  const [userRankings, setUserRankings] = useState([]);
  const [roaster, setRoaster] = useState([]);
  const { gameDate } = useParams();

  useEffect(() => {
    const getUserRankings = async () => {
      setIsLoading(true);
      const rankings = await fetchUserRankings(gameDate);
      setUserRankings(rankings);
      setIsLoading(false);
    };

    getUserRankings();
  }, []);

  return (
    <Wrapper>
      <RankingsWrapper>
        {isLoading
          ? <p>로딩중</p>
          : <UserRankings userRankings={userRankings} />}
      </RankingsWrapper>
      <RoasterWrapper>
        {/* <h2 className="hidden">선택한 로스터</h2>
        <Roaster roaster={roaster} /> */}
      </RoasterWrapper>
    </Wrapper>
  );
}

export default Result;