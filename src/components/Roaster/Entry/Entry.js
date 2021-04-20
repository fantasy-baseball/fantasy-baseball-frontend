import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import playerImage from "../../../assets/images/player_image.jpg";

const EntryWrapper = styled.div`
  display: grid;
  grid-template: repeat(10, 1fr) / repeat(14, 1fr);
  grid-area: ${(props) => props.wrapperGridArea};
`;

const EntryCard = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: ${(props) => props.cardGridArea};
  opacity: 0.7;
`;

const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: ${(props) => props.rowStart};
  grid-column-start: ${(props) => props.columnStart};
  grid-column-end: span 4;

  p {
    font-family: "Bebas Neue";
    font-size: 18px;
    text-align: center;
    color: ${({ theme }) => theme.color.white};
  }
`;

const PlayerImage = styled.img`
  width: 100%;
  height: 100%;
`;

const PlayerInfo = styled.div`
  grid-row: ${(props) => props.rowStart};
  grid-column-start: ${(props) => props.columnStart};
  grid-column-end: span 6;

  p {
    padding: 0.5em;
    font-family: "Bebas Neue";
    font-size: 15px;
    text-align: center;
    color: ${({ theme }) => theme.color.white};
  }
`;

function Entry({ entryPosition }) {
  const {
    playerPosition,
    wrapperGridArea,
    cardGridArea,
    rowStart,
    columnStart,
  } = entryPosition;

  return (
    <EntryWrapper wrapperGridArea={wrapperGridArea}>
      <Position rowStart={rowStart} columnStart={columnStart}>
        <p>{playerPosition}</p>
      </Position>
      <EntryCard cardGridArea={cardGridArea}>
        <FontAwesomeIcon icon={faPlus} color="#0f4cd9" />
      </EntryCard>
      <PlayerInfo rowStart={rowStart + 5} columnStart={columnStart - 1}>
        <p>스트레일리 / 투수</p>
      </PlayerInfo>
    </EntryWrapper>
  );
}

Entry.propTypes = {
  entryPosition: PropTypes.instanceOf(Object).isRequired,
};

export default Entry;
