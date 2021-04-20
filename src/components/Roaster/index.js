import React from "react";
import styled from "styled-components";
import Entry from "./Entry/Entry";

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  position: fixed;
  right: 0;
  grid-template: repeat(14, 8vmin) / repeat(14, 8vmin);
  background-color: ${({ theme }) => theme.color.darkgrey};
`;

const Rhombus = styled.div`
  grid-area: 7 / 5 / span 4 / span 4;
  border: 1px solid black;
  transform: rotate(45deg) skew(-0.15739559rad, -0.15739556rad);
  border: 1px solid ${({ theme }) => theme.color.white};
`;

const ENTRY_POSITIONS = [
  {
    playerPosition: "Left Fielder",
    wrapperGridArea: "2 / 2 / span 4 / span 4",
    cardGridArea: "5 / 4 / span 4 / span 4",
    columnStart: "4",
  },
  {
    playerPosition: "Middle Fielder",
    wrapperGridArea: "2 / 5 / span 4 / span 4",
    cardGridArea: "3 / 6 / span 4 / span 4",
  },
  {
    playerPosition: "Right Fielder",
    wrapperGridArea: "2 / 9 / span 4 / span 4",
    cardGridArea: "5 / 4 / span 4 / span 4",
  },
  {
    playerPosition: "SHORT STOP",
    wrapperGridArea: "4 / 4 / span 4 / span 4",
    cardGridArea: "5 / 5 / span 4 / span 4",
  },
  {
    playerPosition: "2ND BASEMAN",
    wrapperGridArea: "4 / 6 / span 4 / span 4",
    cardGridArea: "5 / 7 / span 4 / span 4",
  },
  {
    playerPosition: "3RD BASEMAN",
    wrapperGridArea: "6 / 9 / span 4 / span 4",
    cardGridArea: "5 / 4 / span 4 / span 4",
  },
  {
    playerPosition: "PITCHER",
    wrapperGridArea: "7 / 5 / span 4 / span 4",
    cardGridArea: "4 / 6 / span 4 / span 4",
  },
  {
    playerPosition: "1ST BASEMAN",
    wrapperGridArea: "6 / 2 / span 4 / span 4",
    cardGridArea: "5 / 4 / span 4 / span 4",
  },
  {
    playerPosition: "CATCHER",
    wrapperGridArea: "10 / 5 / span 4 / span 4",
    cardGridArea: "2 / 6 / span 4 / span 4",
  },
  {
    playerPosition: "DESIGNATED HITTER",
    wrapperGridArea: "10 / 7 / span 4 / span 4",
    cardGridArea: "2 / 6 / span 4 / span 4",
  },
];

function Roaster() {
  return (
    <Wrapper>
      <Rhombus />
      {ENTRY_POSITIONS.map((entryPostion, index) => (
        <Entry key={index} entryPosition={entryPostion} />
      ))}
    </Wrapper>
  );
}

export default Roaster;
