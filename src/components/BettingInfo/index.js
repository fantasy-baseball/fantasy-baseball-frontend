import React, { useState, useEffect } from "react";

import { faUsers, faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { fetchBettingStatus } from "../../api/game";
import { formatDate } from "../../utils/date";

const BettingInfo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const InfoList = styled.ul`
  display: flex;
  gap: 1rem;
`;

const Value = styled.span`
  padding: 0 0 0 0.5rem;
`;

function SharedBettingInfo() {
  const [bettingUsers, setBettingUsers] = useState([]);
  const [bettingTotalMoney, setBettingTotalMoney] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBettingData = async () => {
      try {
        const response = await fetchBettingStatus(formatDate(new Date(), "yyyyMMdd"));

        if (response.status === 404) {
          setError("현재 베팅 정보가 존재하지 않습니다.");
          return;
        }

        if (response.ok === false) {
          setError("데이터 로드에 실패하였습니다.");
          return;
        }

        const { data } = await response.json();

        setBettingUsers(data.users);
        setBettingTotalMoney(data.totalMoney);
      } catch (err) {
        setError("현재 베팅 정보를 가져올 수 없습니다.");
      }
    };

    getBettingData();
  }, []);

  return (
    <BettingInfo>
      {error
        ? <p>{error}</p>
        : (
          <InfoList>
            <li>
              <FontAwesomeIcon
                icon={faUsers}
                size="lg"
                color="black"
              />
              <Value>
                {bettingUsers.length}
              </Value>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCoins}
                size="lg"
                color="black"
              />
              <Value>{bettingTotalMoney}</Value>
            </li>
          </InfoList>
        )}
    </BettingInfo>
  );
}

export default React.memo(SharedBettingInfo);
