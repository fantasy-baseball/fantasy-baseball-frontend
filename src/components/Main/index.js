import React from "react";
import styled from "styled-components";
import Schedule from "./Schedule/Schedule";
import Ranking from "./Ranking/Ranking";
import Guide from "./Guide/Guide";
import Betting from "./Betting/Betting";

const Wrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Section = styled.section`
  width: calc(100% - 450px);
  height: auto;
  min-height: 400px;
`;

function Main() {
  return (
    <Wrapper>
      <Schedule />
      <Ranking />
      <Section>
        <Guide />
        <Betting />
      </Section>
    </Wrapper>
  );
}

export default Main;