import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import stylesUtils from "../../styles/utils";

const Button = styled.button`
  padding: ${({ theme }) => theme.padding.base};
  background: transparent;
  border: 1px solid ${(props) => stylesUtils.selectColor(props)};
  font-family: "Bebas Neue";
  font-size: ${({ theme }) => theme.fontSize.middle};
  letter-spacing: 0.1rem;
  color: ${(props) => stylesUtils.selectColor(props)};
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    background: ${({ theme }) => theme.color.blue};
    border: 1px solid ${({ theme }) => theme.color.blue};

    & > span {
      width: 70px;
    }
  }
`;

const Arrow = styled.span`
  width: 40px;
  padding: 0 0 0 10px;
  display: inline-block;
  position: relative;
  transition: 0.3s all;
`;

const Line = styled.span`
  width: 100%;
  height: 1px;
  background: ${(props) => stylesUtils.selectColor(props)};
  display: inline-block;
`;

const End = styled.span`
  width: 15px;
  height: 1px;
  background: ${(props) => stylesUtils.selectColor(props)};
  display: inline-block;
  position: absolute;
  bottom: 8px;
  transform: rotate(-135deg);
  transform-origin: bottom left;
`;

function SharedButton({ type, title, color }) {
  return (
    <Button
      type={type}
      color={color}
    >
      {title}
      <Arrow>
        <Line color={color} />
        <End color={color} />
      </Arrow>
    </Button>
  );
}

SharedButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default SharedButton;
