import React from "react";
import styled from "styled-components";
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
    accessor: "info",
  },
  {
    Header: "ADD",
    accessor: "add",
  },
];

const bettingData = [
  {
    name: "김현수",
    teamName: "LG",
    position: "좌익수(좌투좌타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "박주홍",
    teamName: "한화",
    position: "투수(좌투좌타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "수아레즈",
    teamName: "LG",
    position: "투수(좌투좌타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "정수빈",
    teamName: "두산",
    position: "중견수(우투우타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "박찬호",
    teamName: "LA 다저스",
    position: "투수(우투우타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "김현수",
    teamName: "LG",
    position: "좌익수(좌투좌타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "박주홍",
    teamName: "한화",
    position: "투수(좌투좌타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "수아레즈",
    teamName: "LG",
    position: "투수(좌투좌타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "정수빈",
    teamName: "두산",
    position: "중견수(우투우타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "박찬호",
    teamName: "LA 다저스",
    position: "투수(우투우타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "김현수",
    teamName: "LG",
    position: "좌익수(좌투좌타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "박주홍",
    teamName: "한화",
    position: "투수(좌투좌타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "수아레즈",
    teamName: "LG",
    position: "투수(좌투좌타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "정수빈",
    teamName: "두산",
    position: "중견수(우투우타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "박찬호",
    teamName: "LA 다저스",
    position: "투수(우투우타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "김현수",
    teamName: "LG",
    position: "좌익수(좌투좌타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "박주홍",
    teamName: "한화",
    position: "투수(좌투좌타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "수아레즈",
    teamName: "LG",
    position: "투수(좌투좌타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "정수빈",
    teamName: "두산",
    position: "중견수(우투우타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "박찬호",
    teamName: "LA 다저스",
    position: "투수(우투우타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "김현수",
    teamName: "LG",
    position: "좌익수(좌투좌타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "박주홍",
    teamName: "한화",
    position: "투수(좌투좌타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "수아레즈",
    teamName: "LG",
    position: "투수(좌투좌타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "정수빈",
    teamName: "두산",
    position: "중견수(우투우타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
  {
    name: "박찬호",
    teamName: "LA 다저스",
    position: "투수(우투우타)",
    kbo_id: 68703,
    photo_url: "http://example_image.jpg",
  },
];

const Wrapper = styled.article`
  padding: 0 0 ${({ theme }) => theme.padding.base} 0;
  flex: auto;
`;

function SearchEntry() {
  return (
    <Wrapper>
      <h2 className="hidden">1군 엔트리 선수 검색하기</h2>
      <Table
        tableColumns={bettingColumns}
        tableData={bettingData}
        search={true}
        colWidths={["300px", "auto", "80px", "80px"]}
        tableHeight="400px"
        placeholder="선수 정보를 검색해주세요 (ex: 김현수, 좌익수, 좌투좌타 등)"
      />
    </Wrapper>
  );
}

export default React.memo(SearchEntry);
