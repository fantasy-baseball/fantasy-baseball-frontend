import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { fetchPlayers } from "../../api";
import Table from "../Shared/Table";

// TODO: 삭제 예정
const bettingColumns = [
  {
    Header: "NAME",
    accessor: "name"
  },
  {
    Header: "POSITION",
    accessor: "position",
  },
  {
    Header: "INFO",
    accessor: "link",
  },
  {
    Header: "ADD",
    accessor: "add",
  },
];

const Wrapper = styled.article`
  padding: 0 0 ${({ theme }) => theme.padding.base} 0;
  flex: auto;
`;

const PlayerLink = styled.a`
  color: ${({ theme }) => theme.color.white};
`;

const AddIcon = styled.span`
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
`;

function SearchEntry() {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPlayers = async () => {
      setIsLoading(true);

      const entryPlayers = await fetchPlayers();
      const filteredEntryPlayers = entryPlayers.map((player) => {
        const currentPlayer = { ...player };
        const { link } = currentPlayer;

        currentPlayer.link = (
          <PlayerLink href={link} target="_blank">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </PlayerLink>
        );
        currentPlayer.add = (<FontAwesomeIcon icon={faUserPlus} />);
        return currentPlayer;
      });

      setPlayers(filteredEntryPlayers);
      setIsLoading(false);
    };

    getPlayers();
  }, []);

  return (
    <Wrapper>
      <h2 className="hidden">1군 엔트리 선수 검색하기</h2>
      {isLoading
        ? <p>로딩중</p>
        : (
          <Table
            tableColumns={bettingColumns}
            tableData={players}
            search={true}
            colWidths={["300px", "auto", "80px", "80px"]}
            tableHeight="400px"
            placeholder="선수 정보를 검색해주세요 (ex: 김현수, 좌익수, 좌투좌타 등)"
          />
        )}
    </Wrapper>
  );
}

export default React.memo(SearchEntry);
