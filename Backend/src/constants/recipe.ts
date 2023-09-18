import {
  Diet,
  DishType,
  Like,
  MealCourse,
  Origin,
  Rating,
  User,
  UserProfile,
  Comment,
} from "../models";

export const RecipeDetail: any = [
  {
    model: User,
    as: "author",
    attributes: ["id", "email", "createdAt", "username"],
    include: [
      {
        model: UserProfile,
        as: "profile",
        attributes: ["name", "profilePicture"],
      },
    ],
  },
  Origin,
  Diet,
  DishType,
  MealCourse,

  {
    model: Rating,
    attributes: ["rating", "userId", "recipeId"],
    as: "ratings",
  },
  {
    model: Comment,
    as: "comments",
    include: [
      {
        model: User,
        as: "user",
        attributes: ["id", "email", "createdAt", "username"],
        include: [
          {
            model: UserProfile,
            as: "profile",
            attributes: ["name", "profilePicture"],
          },
        ],
      },
      {
        model: Like,
        as: "likes",
        attributes: ["userId"],
      },
    ],
  },
  {
    model: Like,
    as: "likes",
    attributes: ["userId"],
  },
];

export const RecipeList: any = [
  {
    model: User,
    as: "author",
    attributes: ["id", "email", "username", "createdAt", "username"],
    include: [
      {
        model: UserProfile,
        as: "profile",
        attributes: ["name", "profilePicture"],
      },
    ],
  },
  {
    model: Rating,
    attributes: ["rating"],
    as: "ratings",
  },
  {
    model: Comment,
    as: "comments",
  },
  {
    model: Like,
    as: "likes",
  },
];
