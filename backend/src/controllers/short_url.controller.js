import { createShortUrlWithoutUser } from "../services/short_url.service.js";
import { getShortUrl } from "../dao/short_url.js";

// flow-code: controller > router > app

export const createShortUrl = async (req, res) => {
  const { url } = req.body;
  const shortUrl = await createShortUrlWithoutUser(url);
  res.send(process.env.APP_URL + shortUrl);
};

export const redirectShortUrlToFullUrl = async (req, res) => {
  const { shortUrl } = req.params;
  const url = await getShortUrl(shortUrl);
  res.redirect(url.full_url);
};
