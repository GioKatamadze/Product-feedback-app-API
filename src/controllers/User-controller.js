import User from "../models/User.js";

const getAllUsers = async (_, res) => {
  const data = await User.find();
  const newData = await data.map((user) => {
    return {
      avatar: user.avatar,
      name: user.name,
      username: user.username,
      id: user.id,
    };
  });

  return res.json(newData);
};

export default getAllUsers;
