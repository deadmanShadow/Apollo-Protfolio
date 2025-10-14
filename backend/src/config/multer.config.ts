import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinaryUpload } from "./cloudinary.config";

const storage = new CloudinaryStorage({
  cloudinary: cloudinaryUpload,
  params: {
    public_id: (req, file) => {
      const filename = file.originalname
        .toLowerCase()
        .replace(/\s+/g, "-") //replace empty space
        .replace(/\./g, "-") //replace .
        .replace(/[^a-z0-9\-\.]/g, ""); //replace special char

      const extension = file.originalname.split(".").pop();
      //base 36
      const uniqueFileName =
        Math.random().toString(36).substring(2) +
        "-" +
        Date.now() +
        "-" +
        filename +
        "." +
        extension;
      return uniqueFileName;
    },
  },
});

export const multerUpload = multer({ storage: storage });
