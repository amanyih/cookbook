import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

export const CONNECTION_URL = process.env.CONNECTION_URL;
export const PORT = process.env.PORT || 5000;
export const SECRET_KEY = process.env.SECRET_KEY;
