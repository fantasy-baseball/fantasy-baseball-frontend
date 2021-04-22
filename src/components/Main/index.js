import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Schedule from "./Schedule/Schedule";
import Ranking from "./Ranking/Ranking";
import Guide from "./Guide/Guide";
import Betting from "./Betting/Betting";
import Modal from "../Shared/Modal";

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

function Main({ isModalVisible, setIsModalVisible }) {
  return (
    <Wrapper>
      {isModalVisible
        && (
          <Modal
            setIsModalVisible={setIsModalVisible}
            title="가입 축하"
            contentText="가입축하 포인트 5000!"
          />
        )}
      <Schedule />
      <Ranking />
      <Section>
        <Guide />
        <Betting />
      </Section>
    </Wrapper>
  );
}

Main.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  setIsModalVisible: PropTypes.func.isRequired,
};

export default Main;
