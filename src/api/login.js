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
