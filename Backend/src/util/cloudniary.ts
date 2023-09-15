import cloudinaryV2 from "cloudinary";
import { config } from "../config/config";

const cloudinary = cloudinaryV2.v2;

const cloudinaryConfig = () => cloudinary.config(config.cloudinary);

cloudinaryConfig();

export { cloudinary };
