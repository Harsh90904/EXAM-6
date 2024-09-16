const User = require("../models/user");

const signup = async (req, res) => {

  let data = await User.create(req.body);
  res.send(data);
};
const login = async (req, res) => {
  let { email, password } = req.body;
  let isUser = await User.findOne({ email: email });
  console.log("isUser: " + isUser);
  if (!isUser) {
    return res.send({ message: "user not found" });
  }

  if (isUser.password !== password) {
    return res.send({ message: "password is incorrect" });
  }

  res.send({ message: "logged in successfully", User: isUser });
};

module.exports = { signup, login  };
