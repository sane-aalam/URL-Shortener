import express from "express";
const app = express();
const port = 3000;
import { nanoid } from "nanoid";

app.get("/createURL", (req, res) => {
  const generateString = nanoid(7);
  res.json({
    msg: "successfully called done",
    str: generateString,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
