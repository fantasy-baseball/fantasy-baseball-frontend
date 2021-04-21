import React, { useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import ReactDom from "react-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const Modal = styled.div`
  width: 400px;
  height: auto;
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
`;

const Header = styled.div`
  padding: 0.5rem 0.8rem;
  background: ${({ theme }) => theme.color.blue};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  background: transparent;
  border: transparent;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.white};

  &:hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.padding.base};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  width: 100%;
  margin: 0 0 1rem 0;
  padding: ${({ theme }) => theme.padding.small};
  text-align: center;
`;

const LinkButton = styled(Link)`
  padding: ${({ theme }) => theme.padding.small};
  border: 1px solid ${({ theme }) => theme.color.white};
  display: inline-block;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.white};

  &:hover {
    background: ${({ theme }) => theme.color.blue};
    border-color: ${({ theme }) => theme.color.blue};
    transition: 0.3s all;
  }
`;

function SharedModal(props) {
  const {
    setIsVisible,
    title,
    contentText,
    hasLinkButton,
    path,
    linkButtonText,
  } = props;

  const modal = useRef();

  const closeModal = () => {
    setIsVisible(false);
  };

  const clickModalOutside = (event) => {
    if (!modal.current || modal.current.contains(event.target)) return;
    closeModal();
  };

  return ReactDom.createPortal(
    <Wrapper onClick={clickModalOutside}>
      <Modal ref={modal}>
        <Header>
          {title}
          <CloseButton type="button" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </Header>
        <Content>
          <Text>{contentText}</Text>
          {hasLinkButton
            && <LinkButton to={path}>{linkButtonText}</LinkButton>}
        </Content>
      </Modal>
    </Wrapper>,
    document.getElementById("portal-modal")
  );
}

SharedModal.propTypes = {
  setIsVisible: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  contentText: PropTypes.string.isRequired,
  hasLinkButton: PropTypes.bool.isRequired,
  path: PropTypes.string,
  linkButtonText: PropTypes.string,
};

SharedModal.defaultProps = {
  path: "/",
  linkButtonText: "GO TO MAIN",
};

export default SharedModal;
