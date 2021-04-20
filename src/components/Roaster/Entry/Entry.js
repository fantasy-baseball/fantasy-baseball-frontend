import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const EntryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-area: ${(props) => props.wrapperGridArea};
`;

const EntryCard = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  grid-area: ${(props) => props.cardGridArea};
  border: 1px solid black;
  opacity: 0.7;
`;

const Position = styled.div`
  grid-row: 4;
  grid-column-start: 4;
  grid-column-end: span 4;
  border: 1px solid white;
`;

function Entry({ entryPosition }) {
  const {
    playerPosition,
    wrapperGridArea,
    cardGridArea,
    columnStart,
  } = entryPosition;

  return (
    <EntryWrapper wrapperGridArea={wrapperGridArea}>
      <Position columnStart={columnStart} />
      <EntryCard cardGridArea={cardGridArea} />
    </EntryWrapper>
  );
}

Entry.propTypes = {
  entryPosition: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Entry;
