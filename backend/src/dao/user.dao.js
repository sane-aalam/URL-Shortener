import User from "../models/user.model";

// create method to find user by email
export const findUserbyEmail = async (email) => {
  const result = await User.findOne({ email });
  return result;
};

// create method to find user by id
export const findUserbyId = async (id) => {
  const result = await User.findById({ id });
  return result;
};

// Creates a new user instance with provided name, email, and password.
// Saves the user to the MongoDB database using Mongoose.
// Returns the saved user document.
export const createUserDB = async (name, email, password) => {
  const newUser = new User({ name, email, password });
  await newUser.save();
  return newUser;
};
