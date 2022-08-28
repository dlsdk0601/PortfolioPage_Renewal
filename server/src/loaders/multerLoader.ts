import multer from "multer";
import { v4 } from "uuid";

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "uploads/");
  },
  filename: (_, file, callBack) => {
    const fileName = Date.now() + v4() + file.originalname;
    callBack(null, fileName);
  },
});

export const upload = multer({ storage });
