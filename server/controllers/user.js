import User from "../models/users.js";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import generateToken from "../config/generateToken.js";

export const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return next(createHttpError(400, "Formfields must be filled"));
  }
  try {
    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return next(createHttpError(400, "username already exists"));
    }

    const userEmailExists = await User.findOne({ email });
    if (userEmailExists) {
      return next(createHttpError(400, "email already exists"));
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const accessToken = generateToken(user.id);
    res.status(201).json({ accessToken, msg: "User registration successful" });
  } catch (error) {
    next(error);
  }
};
export const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next(createHttpError(400, "Username or password is missng"));
  }
  try {
    const user = await User.findOne({ username: username }).select("+password");
    if (!user) {
        return next(createHttpError(401, "Username or password is incorrect"));
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!user || !isPasswordMatch) {
      return next(createHttpError(401, "usernam or password is incorrect"));
    }
    const accessToken = generateToken(user.id);
    res.status(200).json({ accessToken, msg: "Login successful" });
  } catch (error) {
    next(error);
  }
};

export const authenticateUser = async (req, res, next) => {
  const { id: userId } = req.user;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return next(createHttpError(404, "User not found"));
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
