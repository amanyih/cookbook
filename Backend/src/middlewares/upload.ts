import { Request, Response } from "express";
import { cloudinary } from "../util/cloudniary";
import { multerUpload, dataUri, multerUploads } from "./multer";

const upload = async (req: Request, res: Response, next: Function) => {
  try {
    if (req.file) {
      const file = dataUri(req)!.content;

      if (file != null) {
        const result = await cloudinary.uploader.upload(file!);
        req.body.image = result.secure_url;
      }
    }
  } catch (err) {
    console.log(err);
  }
  next();
};

const uploads = async (req: Request, res: Response, next: Function) => {
  try {
    if (req.files) {
      const files = req.files as Express.Multer.File[];

      const urls = [];
      for (let i = 0; i < files.length; i++) {
        const file = dataUri(req)!.content;
        if (file != null) {
          const result = await cloudinary.uploader.upload(file!);
          urls.push(result.secure_url);
        }
      }
      req.body.images = urls;
    }
  } catch (err) {
    console.log(err);
  }
  next();
};

const uploadImage = [multerUpload, upload];
const uploadImages = [multerUploads, uploads];

export { uploadImage, uploadImages };
