import React from "react";
import styled from "styled-components";
import logo from "../../../assets/images/lg_twins_logo.png";

const Entry = styled.div`
  width: 20%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::after {
    width: 1px;
    height: 140px;
    margin: -70px 0 0 0;
    background: ${({ theme }) => theme.colors.lightgrey};
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    content: "";
  }
`;

const Team = styled.div`
  padding: 0 ${({ theme }) => theme.margins.base};
  text-align: center;
`;

const Logo = styled.img`
  width: auto;
  height: 50px;
`;

const TeamName = styled.p`
  margin: ${({ theme }) => theme.margins.small};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

const Pitcher = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

const Info = styled.div`
  width: 40px;
  text-align: center;
`;

const Versus = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.bigger};
  color: ${({ theme }) => theme.colors.lightgrey};
`;

const Time = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

function ScheduleListEntry() {
  return (
    <Entry>
      <Team>
        <Logo src={logo} />
        <TeamName>LG</TeamName>
        <Pitcher>수아레즈</Pitcher>
      </Team>
      <Info>
        <Versus>VS</Versus>
        <Time>18:30</Time>
      </Info>
      <Team>
        <Logo src={logo} />
        <TeamName>LG</TeamName>
        <Pitcher>수아레즈</Pitcher>
      </Team>
    </Entry>
  );
}

export default ScheduleListEntry;
