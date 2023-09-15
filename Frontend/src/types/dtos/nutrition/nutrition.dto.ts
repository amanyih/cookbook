class Nutrition {
  calories: number;
  fat: number;
  protein: number;
  carbs: number;
  sugar: number;

  constructor({
    calories,
    fat,
    protein,
    carbs,
    sugar,
  }: {
    calories: number;
    fat: number;
    protein: number;
    carbs: number;
    sugar: number;
  }) {
    this.calories = calories;
    this.fat = fat;
    this.protein = protein;
    this.carbs = carbs;
    this.sugar = sugar;
  }
}

export default Nutrition;
