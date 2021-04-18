import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  width: 100%;
  height: 300px;
  padding: 50px 0 0 0;
  display: flex;
  justify-content: flex-end;
`;

const TextBox = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  margin: 0 ${({ theme }) => theme.margins.base} 0 0;
  padding: ${({ theme }) => theme.paddings.bigger};
  background: ${({ theme }) => theme.colors.white};
  overflow: auto;
`;

const Title = styled.p`
  margin: 0 0 1rem 0;
  font-family: "Bebas Neue";
  font-size: 3rem;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.blue};
`;

const Content = styled.p`
  line-height: 1.5rem;
`;

function Guide() {
  return (
    <Wrapper>
      <h2 className="hidden">BETTING GUIDE</h2>
      <TextBox>
        <Title>WELCOME TO FANTASY BASEBALL</Title>
        <Content>
          판타지 베이스볼에 오신 것을 환영합니다.
          <br />
          이곳에서 여러분은 매일 갱신되는 1군 엔트리 선수들을 바탕으로 원하는 로스터를 만들어 유저들과 경쟁할 수 있습니다.
          <br />
          배팅한 금액이 높을 수록, 선수를 선택한 사람이 적을 수록 여러분은 더 높은 금액을 획득할 수 있습니다.
          <br />
          베팅 결과는 당일 진행된 게임이 종료된 후 확인 가능하며, 야구 경기가 진행되지 않는 주말에는 베팅을 진행할 수 없습니다.
          <br />
          여러분에게 좋은 결과가 있길 바라며, Let’s PLAY BALL!
          판타지 베이스볼에 오신 것을 환영합니다.
          <br />
          이곳에서 여러분은 매일 갱신되는 1군 엔트리 선수들을 바탕으로 원하는 로스터를 만들어 유저들과 경쟁할 수 있습니다.
          <br />
          배팅한 금액이 높을 수록, 선수를 선택한 사람이 적을 수록 여러분은 더 높은 금액을 획득할 수 있습니다.
          <br />
          베팅 결과는 당일 진행된 게임이 종료된 후 확인 가능하며, 야구 경기가 진행되지 않는 주말에는 베팅을 진행할 수 없습니다.
          <br />
          여러분에게 좋은 결과가 있길 바라며, Let’s PLAY BALL!
        </Content>
      </TextBox>
    </Wrapper>
  );
}

export default Guide;
