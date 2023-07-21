import { Favorite } from "../models";

export const createFavorite = async (req: any, res: any) => {
  try {
    const favorite = await Favorite.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        favorite,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteFavorite = async (req: any, res: any) => {
  try {
    const favorite = await Favorite.findByPk(req.params.id);
    if (!favorite) {
      return res.status(404).json({ error: "Favorite not found" });
    }
    await favorite.destroy();
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const getAllFavoriteByUserId = async (req: any, res: any) => {
  try {
    const favorites = await Favorite.findAll({
      where: { userId: req.params.id },
    });
    res.status(200).json({
      status: "success",
      results: favorites.length,
      data: {
        favorites,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
