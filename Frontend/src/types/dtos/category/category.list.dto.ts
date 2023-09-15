class CategoryListDto {
  id: number;
  name: string;
  description: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  recipes: number;

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
    image?: string;
    createdAt: Date;
    updatedAt: Date;
    recipes: number;
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

export default CategoryListDto;
