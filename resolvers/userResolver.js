const User = require("../models/userModel");

const userResolver = {
  getUser: async ({ id }) => {
    return await User.findById(id);
  },
  getUsers: async () => {
    return await User.find();
  },
  createUser: async ({ name, email }) => {
    const newUser = new User({ name, email });
    await newUser.save();
    return newUser;
  },
  deleteUser: async ({ id }) => {
    await User.findByIdAndDelete(id);
    return "User deleted successfully.";
  },
};

module.exports = userResolver;