import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const EntryWrapper = styled.div`
  display: grid;
  grid-template: repeat(10, 1fr) / repeat(14, 1fr);
  grid-area: ${(props) => props.wrapperGridArea};
`;

const EntryCard = styled.div`
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: ${(props) => props.cardGridArea};
  position: relative;
`;

const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: ${(props) => props.rowStart};
  grid-column-start: ${(props) => props.columnStart};
  grid-column-end: span 5;

  p {
    font-family: "Bebas Neue";
    font-size: ${({ theme }) => theme.fontSize.base};
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
  grid-column-end: span 5;

  p {
    padding: 0.5em 0;
    font-family: "Bebas Neue";
    font-size: 15px;
    text-align: center;
    color: ${({ theme }) => theme.color.white};
    word-break: break-word;
  }
`;

function Entry({ entryPosition, roasterPosition }) {
  const {
    title,
    wrapperGridArea,
    cardGridArea,
    rowStart,
    columnStart,
  } = entryPosition;

  const {
    name,
    playerPhotoUrl,
    team,
  } = roasterPosition;

  return (
    <EntryWrapper wrapperGridArea={wrapperGridArea}>
      <Position rowStart={rowStart} columnStart={columnStart}>
        <p>{title}</p>
      </Position>
      <EntryCard cardGridArea={cardGridArea}>
        {name
          ? <PlayerImage src={playerPhotoUrl} />
          : <FontAwesomeIcon icon={faPlus} color="#0f4cd9" />}
      </EntryCard>
      <PlayerInfo rowStart={rowStart + 6} columnStart={columnStart}>
        {name
          && <p>{`${name} / ${team}`}</p>}
      </PlayerInfo>
    </EntryWrapper>
  );
}

Entry.propTypes = {
  entryPosition: PropTypes.instanceOf(Object).isRequired,
  roasterPosition: PropTypes.instanceOf(Object).isRequired,
};

export default React.memo(Entry);
