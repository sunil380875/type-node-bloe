import express from "express";
import multer from "multer";

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/imagestore");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg");
  },
});

const upload = multer({ storage: storage });

export default upload;
