export type Food = {
  uuid?: string
  name: string
  category: FoodCategory
  caloriesPer100g: number
  fatsPer100g: number
  proteinsPer100g: number
  carbsPer100g: number
}

export type FoodCategory =
  | "fruit"
  | "vegetable"
  | "meat"
  | "fish"
  | "dairy"
  | "grain"
  | "other"
