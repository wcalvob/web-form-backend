const User = require("../models/User");

const addUser = async (req, res) => {
  try {
    const { name, country } = req.body;
    const user = User({ name, country });
    const userStored = await user.save();
    res.status(201).send({ userStored });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

const getUser = async (req, res) => {
  const users = await User.find().lean().exec();
  res.status(200).send({ users });
};

module.exports = {
  addUser,
  getUser,
};
