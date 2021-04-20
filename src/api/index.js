const API_ADDRESS = process.env.REACT_APP_API_ADDRESS;

export const fetchUser = async (tokenId) => {
  try {
    const res = await fetch(`${API_ADDRESS}/users/login`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenId}`,
      },
      credentials: "include",
    });
    const { result, data: user } = await res.json();
    console.log(user);
    return { result, user };
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const deleteUser = async (token) => {
  try {
    const res = await fetch(`${API_ADDRESS}/users/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    const { result } = await res.json();
    return result;
  } catch (err) {
    console.error(err);
    return err;
  }
};
