// TO DO: 실서버 연결시 주석 해제 및 testDay를 today로 교체
// import { formatDate } from "../utils/date";

const API_URL = process.env.REACT_APP_API_ADDRESS;

// const today = formatDate(new Date(), "yyyyMMdd");
const testDay = "20210418";

export const fetchSchedule = async () => {
  try {
    const res = await fetch(`${API_URL}/games/${testDay}/schedule`, {
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

export const fetchPlayers = async () => {
  try {
    const res = await fetch(`${API_URL}/games/${testDay}/players`, {
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

export const fetchBettingData = async () => {
  try {
    const res = await fetch(`${API_URL}/games/${testDay}/betting`, {
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

export const postBetting = async (bettingData) => {
  try {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token"))
      .split("=")[1];

    const res = await fetch(`${API_URL}/games/${testDay}/betting`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...bettingData,
        date: testDay,
      }),
    });

    return await res.json();
  } catch (err) {
    console.error(err);
  }
};
