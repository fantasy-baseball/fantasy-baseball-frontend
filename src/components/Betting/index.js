import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { fetchPlayers } from "../../api";
import SearchEntry from "./SearchEntry";
import Roaster from "../Roaster";
import BettingInfo from "../BettingInfo";
import Slider from "../Shared/Slider";
import Button from "../Shared/Button";
import { EMPTY_ROASTER } from "../../constants";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
`;

const BettingWrapper = styled.section`
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

const BettingMoney = styled.article`
  width: 100%;
  margin: auto 0 0 0;
  padding: ${({ theme }) => theme.padding.base};
  background: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoList = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

function Betting() {
  const userMoney = useSelector((state) => state.login.user.money);

  const [players, setPlayers] = useState([]);
  const [roaster, setRoaster] = useState(EMPTY_ROASTER);
  const [bettingMoney, setBettingMoney] = useState(500);
  const [isLoading, setIsLoading] = useState(false);

  const handleBettingMoney = (event) => {
    const { value } = event.target;
    setBettingMoney(value);
  };

  // TODO : 베팅 등록 함수 생성
  const submitBetting = () => {};

  useEffect(() => {
    const getPlayers = async () => {
      setIsLoading(true);
      const fetchedPlayers = await fetchPlayers();
      setPlayers(fetchedPlayers);
      setIsLoading(false);
    };

    getPlayers();
  }, []);

  return (
    <Wrapper>
      <BettingWrapper>
        {isLoading
          ? <p>로딩중</p>
          : (
            <>
              <SearchEntry
                players={players}
                setRoaster={setRoaster}
              />
              <BettingMoney>
                <Slider
                  minValue={500}
                  maxValue={userMoney}
                  step={100}
                  value={bettingMoney}
                  handleChange={handleBettingMoney}
                />
                <InfoList>
                  <BettingInfo />
                  <Button
                    type="submit"
                    title="BETTING"
                    color="blue"
                    size="small"
                    handleClick={submitBetting}
                  />
                </InfoList>
              </BettingMoney>
            </>
          )}
      </BettingWrapper>
      <RoasterWrapper>
        <h2 className="hidden">로스터 선택하기</h2>
        <Roaster roaster={roaster} />
      </RoasterWrapper>
    </Wrapper>
  );
}

export default Betting;
