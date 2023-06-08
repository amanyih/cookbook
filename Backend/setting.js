import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

export const CONNECTION_URL = process.env.CONNECTION_URL;
export const PORT = process.env.PORT || 5000;
export const DB = process.env.DB;
export const USER = process.env.USER;
export const HOST = process.env.HOST;
export const PASSWORD = process.env.PASSWORD;
