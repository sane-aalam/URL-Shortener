import { asyncWrapper } from "../services/AsyncWrapper.js";

export const registerUser = asyncWrapper((req, res) => {
  res.send("regiser");
});

export const loginUser = asyncWrapper((req, res) => {
  res.send("login");
});
