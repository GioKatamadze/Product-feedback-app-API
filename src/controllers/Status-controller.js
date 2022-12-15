import Status from "../models/Status.js";

const getAllStatuses = async (_, res) => {
  const data = await Status.find();
  const newData = data.map((status) => {
    return {
      id: status.id,
      name: status.name,
      color: status.color,
    };
  });
  return res.json(newData);
};

export default getAllStatuses;
