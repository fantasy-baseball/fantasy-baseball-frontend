const API_URL = process.env.REACT_APP_API_ADDRESS;

export const fetchUser = async (tokenId) => {
  try {
    const res = await fetch(`${API_URL}/users/login`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenId}`,
      },
      credentials: "include",
    });
    const { result, data: user } = await res.json();
    return { result, user };
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const deleteUser = async () => {
  try {
    const res = await fetch(`${API_URL}/users/logout`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { result } = await res.json();
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};
