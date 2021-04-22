import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCoins } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

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
  return (
    <BettingInfo>
      <InfoList>
        <li>
          <FontAwesomeIcon
            icon={faUsers}
            size="lg"
            color="black"
          />
          <Value>2,123,456</Value>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faCoins}
            size="lg"
            color="black"
          />
          <Value>2,123,456</Value>
        </li>
      </InfoList>
    </BettingInfo>
  );
}

export default React.memo(SharedBettingInfo);
