import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCoins } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../utils/date";
import { fetchBettingStatus } from "../../api/game";

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
        const status = await fetchBettingStatus(formatDate(new Date(), "yyyyMMdd"));

        if (status.result === "none") {
          setError("현재 베팅 정보를 가져올 수 없습니다.");
          return;
        }

        const { users, totalMoney } = status;

        setBettingUsers(users);
        setBettingTotalMoney(totalMoney);
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
