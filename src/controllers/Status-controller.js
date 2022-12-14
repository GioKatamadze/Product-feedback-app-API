import Status from "../models/Status.js";

const getAllStatuses = async (req, res) => {
  const data = await Status.find();
  const newData = data.map((status) => {
    return {
      id: status.id,
      name: status.name,
    };
  });
  return res.json(newData);
};

export default getAllStatuses;
