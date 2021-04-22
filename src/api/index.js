const API_URL = process.env.REACT_APP_API_ADDRESS;

export const fetchUser = async (tokenId, path) => {
  try {
    const res = await fetch(`${API_URL}/users/${path}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenId}`,
      },
      credentials: "include",
    });
    const { result, data: user, isNewUser } = await res.json();

    return { result, user, isNewUser };
  } catch (err) {
    console.error(err);
  }
};

export const deleteUser = async () => {
  try {
    const res = await fetch(`${API_URL}/users/logout`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const { result } = await res.json();

    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchSchedule = async () => {
  try {
    // TO DO: 실서버 연결시 주석 해제 및 testDay를 today로 교체
    // const today = formatDate(new Date(), "yyyyMMdd");
    const testDay = "20210418";
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
    // TO DO: 실서버 연결시 주석 해제 및 testDay를 today로 교체
    // const today = formatDate(new Date(), "yyyyMMdd");
    const testDay = "20210418";
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
