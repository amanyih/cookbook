import { Image } from "../models";
import { Request, Response } from "express";

export const createImage = async (req: Request, res: Response) => {
  try {
    const image = await Image.create({
      url: req.body.image,
    });
    res.send({
      status: "success",
      data: {
        image,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getImage = async (req: Request, res: Response) => {
  try {
    const image = await Image.findByPk(req.params.id);
    if (!image) {
      return res.status(404).json({
        status: "fail",
        message: "Image not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        image,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getAllImage = async (req: Request, res: Response) => {
  try {
    const images = await Image.findAll();
    res.status(200).json({
      status: "success",
      results: images.length,
      data: {
        images,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const updateImage = async (req: Request, res: Response) => {
  try {
    const image: any = await Image.findByPk(req.params.id);
    if (!image) {
      return res.status(404).json({
        status: "fail",
        message: "Image not found",
      });
    }
    image.url = req.body.image;
    await image.save();
    res.status(200).json({
      status: "success",
      data: {
        image,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const deleteImage = async (req: Request, res: Response) => {
  try {
    const image: any = await Image.findByPk(req.params.id);
    if (!image) {
      return res.status(404).json({
        status: "fail",
        message: "Image not found",
      });
    }
    await image.destroy();
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getImageByRecipeId = async (req: Request, res: Response) => {
  res.send("getImageByRecipeId");
};
