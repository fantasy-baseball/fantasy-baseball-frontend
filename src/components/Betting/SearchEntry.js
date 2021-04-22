import React, { useState } from "react";
import produce from "immer";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Table from "../Shared/Table";

const Wrapper = styled.article`
  padding: 0 0 ${({ theme }) => theme.padding.base} 0;
  flex: auto;
`;

const PlayerLink = styled.a`
  color: ${({ theme }) => theme.color.white};
`;

const AddIcon = styled.span`
  color: ${({ theme }) => theme.color.grey};
  cursor: pointer;

  &[data-active="true"],
  &.selected {
    color: ${({ theme }) => theme.color.white};
  }
`;

const getPlayerPosition = (position) => {
  switch (position) {
    case "좌익수":
      return "leftFielder";
    case "중견수":
      return "centerFielder";
    case "우익수":
      return "rightFielder";
    case "1루수":
      return "firstBaseman";
    case "2루수":
      return "secondBaseman";
    case "3루수":
      return "thirdBaseman";
    case "유격수":
      return "shortStop";
    case "투수":
      return "pitcher";
    case "포수":
      return "catcher";
    case "지명타자":
      return "designatedHitter";
    default:
      return "포지션이 없습니다.";
  }
};

function SearchEntry({ players, setRoaster }) {
  const [clickCount, setclickCount] = useState(0);

  const handleAddIconClick = (tableProps, event) => {
    const currentData = tableProps.value;
    const currentIcon = event.currentTarget;
    const kboId = currentIcon.getAttribute("data-kbo-id");
    const position = currentIcon.getAttribute("data-position");
    const { isActive } = currentData;
    const selectedPlayer = players.find((player) => player.kboId === kboId);

    setclickCount((prev) => {
      const newCount = prev + 1;
      return newCount;
    });

    if (kboId === selectedPlayer.kboId && isActive) {
      setRoaster(
        produce((draft) => {
          draft[position] = { name: null };
        })
      );
      currentData.isActive = false;
      return;
    }

    const iconList = tableProps.rows;
    const selectedDataIndex = iconList.findIndex((icon) => (
      getPlayerPosition(icon.values.add.position) === position
        && icon.values.add.isActive
    ));

    if (selectedDataIndex > -1) {
      iconList[selectedDataIndex].values.add.isActive = false;
    }

    currentData.isActive = true;
    setRoaster(
      produce((draft) => {
        draft[position] = selectedPlayer;
      })
    );
  };

  const renderLinkIcon = ({ value }) => (
    <PlayerLink href={value} target="_blank">
      <FontAwesomeIcon icon={faExternalLinkAlt} />
    </PlayerLink>
  );

  const renderAddIcon = (tableProps) => {
    const position = getPlayerPosition(tableProps.value.position);

    return (
      <AddIcon
        data-kbo-id={tableProps.value.kboId}
        data-active={tableProps.value.isActive}
        data-position={position}
        onClick={(event) => handleAddIconClick(tableProps, event)}
      >
        <FontAwesomeIcon icon={faUserPlus} />
      </AddIcon>
    );
  };

  const BETTING_COLUMNS = [
    {
      Header: "name",
      accessor: "name"
    },
    {
      Header: "team",
      accessor: "team"
    },
    {
      Header: "position",
      accessor: "position",
    },
    {
      Header: "info",
      accessor: "link",
      Cell: renderLinkIcon,
    },
    {
      Header: "add",
      accessor: (row) => ({
        kboId: row.kboId,
        position: row.position,
        isActive: false,
      }),
      Cell: renderAddIcon,
    },
  ];

  return (
    <Wrapper>
      <h2 className="hidden">
        1군 엔트리 선수 검색하기
        {clickCount}
      </h2>
      <Table
        tableColumns={BETTING_COLUMNS}
        tableData={players}
        search={true}
        colWidths={["200px", "100px", "auto", "80px", "80px"]}
        tableHeight="400px"
        placeholder="선수 정보를 검색해주세요 (ex: 김현수, 좌익수, 좌투좌타 등)"
      />
    </Wrapper>
  );
}

SearchEntry.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setRoaster: PropTypes.func.isRequired,
};

export default React.memo(SearchEntry);
