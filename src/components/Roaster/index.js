import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Slot from "./Slot/Slot";
import { SLOT_POSITIONS } from "../../constants";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.darkgrey};
  display: grid;
  grid-template: repeat(12, 7vmin) / repeat(12, 7vmin);
`;

const Rhombus = styled.div`
  border: 1px solid white;
  grid-area: 6 / 5 / span 4 / span 4;
  transform: rotate(45deg) skew(-0.15739559rad, -0.15739556rad);
`;

function Roaster({ roaster }) {
  return (
    <Wrapper>
      <Rhombus />
      {SLOT_POSITIONS.map((slotPosition, index) => (
        <Slot
          key={index}
          slotPosition={slotPosition}
          roasterPosition={roaster[slotPosition.position]}
        />
      ))}
    </Wrapper>
  );
}

Roaster.propTypes = {
  roaster: PropTypes.instanceOf(Object).isRequired,
};

export default React.memo(Roaster);
