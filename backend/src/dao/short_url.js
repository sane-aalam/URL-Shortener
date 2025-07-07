import UrlSchema from "../models/short_url.model.js";

// It is a design pattern used to separate the low-level data access logic
// saveShort URl file contains the functions that interact with the database
export const saveShortUrl = async (shortUrl, longUrl, userId) => {
  const newUrl = new UrlSchema({
    full_url: longUrl,
    short_url: shortUrl,
  });

  if (userId) {
    newUrl.user_id = userId;
  }
  newUrl.save();
};

// This function retrieves a URL from the database based on its short URL
// It is used to redirect the user to the full URL when they access the short URL
// It is a design pattern used to separate the low-level data access logic

export const getShortUrl = async (shortUrl) => {
  const url = await UrlSchema.findOne({ short_url: shortUrl });
  return url;
};
