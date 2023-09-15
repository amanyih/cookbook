import RecipeListDto from "../recipe/recipe.list.dto";

class CategoryDetialDto {
  id: number;
  name: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  recipes: RecipeListDto[];

  constructor({
    id,
    name,
    description,
    image,
    createdAt,
    updatedAt,
    recipes,
  }: {
    id: number;
    name: string;
    description: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    recipes: RecipeListDto[];
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.recipes = recipes;
  }
}

export default CategoryDetialDto;
