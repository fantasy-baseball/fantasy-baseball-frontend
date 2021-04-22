import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchPlayers, postBetting } from "../../api/game";
import checkBettingCondition from "../../utils";
import { showModal } from "../../actions/modal";
import SearchEntry from "./SearchEntry";
import Roaster from "../Roaster";
import BettingInfo from "../BettingInfo";
import Slider from "../Shared/Slider";
import Button from "../Shared/Button";
import { EMPTY_ROASTER } from "../../constants";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Alert = styled.div`
  width: 600px;
  margin: 5rem 0 0 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 1);
  text-align: center;
`;

const Content = styled.div`
  font-size: 2rem;
`;

const Icon = styled.p`
  padding: 0 0 1rem 0;
  font-size: 4rem;
`;

const Title = styled.p`
  font-family: "Bebas Neue";
  font-size: 2.5rem;
`;

const Text = styled.p`
  margin: 0.5rem 0 0 0;
  font-size: 1rem;
`;

function Betting() {
  const userMoney = useSelector((state) => state.login.user.money);

  const [players, setPlayers] = useState([]);
  const [roaster, setRoaster] = useState(EMPTY_ROASTER);
  const [bettingMoney, setBettingMoney] = useState(500);
  const [isLoading, setIsLoading] = useState(false);
  const [bettingCondition, setBettingCondition] = useState(checkBettingCondition(new Date()));

  const dispatch = useDispatch();

  const setModalMessage = (
    contentText,
    hasLinkButton,
    path = "/",
    linkButtonText = "GO TO MAIN"
  ) => {
    dispatch(showModal({
      isVisible: true,
      title: "로스터 등록",
      contentText,
      hasLinkButton,
      path,
      linkButtonText,
    }));
  };

  const handleBettingMoney = (event) => {
    const { value } = event.target;
    setBettingMoney(value);
  };

  const submitBetting = async (event) => {
    event.preventDefault();

    const playersByPosition = Object.entries(roaster);
    const userRoaster = [];

    for (let i = 0; i < playersByPosition.length; i += 1) {
      if (playersByPosition[i][1].name === null) {
        setModalMessage(
          "10인 로스터를 모두 채워야합니다.",
          false,
          "",
          ""
        );
        return;
      }
      userRoaster.push(playersByPosition[i][1].kboId);
    }

    const bettingData = {
      roaster: userRoaster,
      bettingMoney,
    };

    const { result } = await postBetting(bettingData);

    if (result === "duplicate") {
      setModalMessage(
        "이미 베팅에 참가하셨습니다.",
        true
      );
      return;
    }

    if (result === "failure") {
      setModalMessage(
        "베팅 참가에 실패하였습니다. 다시 시도해주세요.",
        true
      );
      return;
    }

    setModalMessage(
      "베팅 참가에 성공하였습니다.",
      true
    );
  };

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
    <>
      {bettingCondition === "open"
        ? (
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
        )
        : (
          <Wrapper>
            <Alert>
              <Icon>⚾️💰❌</Icon>
              <Content>
                <Title>NOT NOW...</Title>
                <Text>지금은 베팅 시간이 아닙니다. 다음에 찾아주세요!</Text>
              </Content>
            </Alert>
          </Wrapper>
        )}
    </>
  );
}

export default Betting;
