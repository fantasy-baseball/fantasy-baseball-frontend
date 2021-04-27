// TO DO: 실서버 연결시 주석 해제 및 testDay를 today로 교체
// import { formatDate } from "../utils/date";

const API_URL = process.env.REACT_APP_API_ADDRESS;

export const fetchSchedule = async (date) => {
  try {
    const res = await fetch(`${API_URL}/games/${date}/schedule`, {
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (res.status === 404) {
      return {
        result: "failure",
        message: "경기 일정이 없습니다.",
      };
    }

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchPlayers = async (date) => {
  try {
    const res = await fetch(`${API_URL}/games/${date}/players`, {
      headers: {
        "Content-Type": "application/json",
      }
    });

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchBettingStatus = async (date) => {
  try {
    const res = await fetch(`${API_URL}/games/${date}/betting`, {
      headers: {
        "Content-Type": "application/json",
      }
    });

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const postBetting = async (date, bettingData) => {
  try {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token"))
      .split("=")[1];

    const res = await fetch(`${API_URL}/games/${date}/betting`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify({
        ...bettingData,
      }),
    });

    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

export const fetchUserRankings = async (date) => {
  try {
    const res = await fetch(`${API_URL}/games/${date}/rankings/users`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 404) {
      return {
        result: "none",
        message: "해당 날짜의 베팅 결과 정보가 없습니다.",
      };
    }

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchPlayerRankings = async (date) => {
  try {
    const res = await fetch(`${API_URL}/games/${date}/rankings/players`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 404) {
      return {
        result: "none",
        message: "해당 날짜의 랭킹 결과 정보가 없습니다.",
      };
    }

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchRoaster = async (date) => {
  try {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token"))
      .split("=")[1];

    const res = await fetch(`${API_URL}/games/${date}/roaster`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    if (res.status === 404) {
      return {
        result: "none",
        message: "해당 날짜의 로스터 정보가 없습니다.",
      };
    }

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchBettingHistory = async () => {
  try {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token"))
      .split("=")[1];
    const res = await fetch(`${API_URL}/games/betting-history`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    if (res.status === 404) {
      return {
        result: "none",
        message: "아직 배팅 이력이 없습니다.",
      };
    }

    const { data } = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
