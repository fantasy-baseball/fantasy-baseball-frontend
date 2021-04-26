import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100vw - 150px);
  height: 100vh;
`;

function Chart({ data }) {
  return (
    <Wrapper>
      {data[0]}
    </Wrapper>
  );
}

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Chart;
