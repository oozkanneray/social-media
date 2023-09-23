import bcrypt from "bcrypt";
import { User } from "../models/userSchema";
import jwt from "jsonwebtoken";
import asynchandler from "express-async-handler";

const registerUser = asynchandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username) res.status(400).json("username required!");
  else if (!password) res.status(400).json("password required!");

  const userAvailable = await User.findOne({ username });
  if (userAvailable) res.status(400).json("user already exists");

  const hashedpw = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username: username,
    password: hashedpw,
  });

  if (newUser) res.status(200).json(newUser);
  else res.status(400).json(`something wrong!`);
});

const loginUser = asynchandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username) res.status(400).json("username required!");
  else if (!password) res.status(400).json("password required!");

  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password as string))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          id: user.id,
        },
      },
      process.env.SECRET_KEY as string,
      { expiresIn: "15m" }
    );
    res.status(200).json(accessToken);
  } else res.status(400).json("email or password not valid ");
});

// const currentUser = asynchandler((req, res) => {
//     res.json(req.user)
// });

export { loginUser, registerUser };
