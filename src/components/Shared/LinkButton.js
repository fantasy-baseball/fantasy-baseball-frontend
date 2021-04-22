import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { selectColor, selectSize } from "../../styles/utils";

const Button = styled(Link)`
  padding: ${(props) => selectSize(props)};
  background: transparent;
  border: 1px solid ${(props) => selectColor(props)};
  font-family: "Bebas Neue";
  font-size: ${({ theme }) => theme.fontSize.middle};
  letter-spacing: 0.1rem;
  color: ${(props) => selectColor(props)};
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    background: ${({ theme }) => theme.color.blue};
    border: 1px solid ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.white};

    & > span {
      width: 70px;

      span {
        background: ${({ theme }) => theme.color.white};
      }
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
  background: ${(props) => selectColor(props)};
  display: inline-block;
`;

const End = styled.span`
  width: 15px;
  height: 1px;
  background: ${(props) => selectColor(props)};
  display: inline-block;
  position: absolute;
  bottom: 8px;
  transform: rotate(-135deg);
  transform-origin: bottom left;
`;

function SharedLinkButton(props) {
  const {
    path,
    type,
    title,
    color,
    size,
  } = props;

  return (
    <Button
      to={path}
      type={type}
      color={color}
      size={size}
    >
      {title}
      <Arrow>
        <Line color={color} />
        <End color={color} />
      </Arrow>
    </Button>
  );
}

SharedLinkButton.propTypes = {
  path: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
};

SharedLinkButton.defaultProps = {
  size: "base",
};

export default SharedLinkButton;