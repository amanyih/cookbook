class CategoryDto {
  id: number;
  name: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    name,
    description,
    image,
    createdAt,
    updatedAt,
  }: {
    id: number;
    name: string;
    description: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export default CategoryDto;
