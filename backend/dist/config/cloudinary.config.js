"use strict";
// fontend -> formdata with image file -> multer -> Form Data -> Req (Body+File)
// our pc folder image -> form data -> File -> Store in temporary folder of project -> Req.file
//Req.file -> cloudinary(req.file) -> url-> store in database
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinaryUpload = void 0;
const cloudinary_1 = require("cloudinary");
const env_1 = require("./env");
cloudinary_1.v2.config({
    cloud_name: env_1.envVars.CLOUDINARY_CLOUD_NAME,
    api_key: env_1.envVars.CLOUDINARY_API_KEY,
    api_secret: env_1.envVars.CLOUDINARY_API_SECRET,
});
exports.cloudinaryUpload = cloudinary_1.v2;
// const uploadToCloudinary= cloudinary.uploader.uploader(file,options)
// our pc folder image -> form data -> File -> Store in temporary folder of project -> Req.file -> package(req.file)
// -> url-> -> req.file -> store in database
