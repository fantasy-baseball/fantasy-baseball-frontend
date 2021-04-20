import React from "react";
import styled from "styled-components";
import Entry from "./Entry/Entry";
import ENTRY_POSITIONS from "../../constants";

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.darkgrey};
  display: grid;
  grid-template: repeat(14, 8vmin) / repeat(14, 8vmin);
`;

const Rhombus = styled.div`
  border: 1px solid white;
  grid-area: 6 / 5 / span 4 / span 4;
  transform: rotate(45deg) skew(-0.15739559rad, -0.15739556rad);
`;

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
