import UrlSchema from "../models/short_url.model.js";
import { generateNanoid } from "../services/helper.js";

// flow-code: controller > router > app

export const createShortUrl = async (req, res) => {
  const { url } = req.body;
  const shortUrl = generateNanoid(7);
  const newUrl = new UrlSchema({
    full_url: url,
    short_url: shortUrl,
  });
  await newUrl.save();
  res.status(201).json({
    message: "Database inserted successfully!",
    data: shortUrl,
  });
};

export const redirectShortUrlToFullUrl = async (req, res) => {
  const { id } = req.params;
  const url = await UrlSchema.findOne({ short_url: id });
  if (url) {
    res.redirect(url.full_url);
  } else {
    res.status(404).send("Not found!");
  }
};
