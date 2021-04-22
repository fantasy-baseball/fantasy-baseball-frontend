import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCoins } from "@fortawesome/free-solid-svg-icons";
import { fetchBettingData } from "../../api/game";

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

  useEffect(() => {
    const getBettingData = async () => {
      const { users, totalMoney } = await fetchBettingData();

      setBettingUsers(users);
      setBettingTotalMoney(totalMoney);
    };

    getBettingData();
  }, []);

  return (
    <BettingInfo>
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
    </BettingInfo>
  );
}

export default React.memo(SharedBettingInfo);
