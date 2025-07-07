import { nanoid } from "nanoid";

export const generateNanoid = (lengthText) => {
  return nanoid(lengthText);
};
