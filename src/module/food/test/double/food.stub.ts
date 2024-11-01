import { FoodCategory } from "../../src/domain/food.entity"

export const singleFoodStub = {
  name: "Almond",
  category: "other" as FoodCategory,
  caloriesPer100g: 579,
  fatsPer100g: 50,
  proteinsPer100g: 24,
  carbsPer100g: 22,
}

export const oilStub = {
  name: "Olive oil",
  category: "other" as FoodCategory,
  caloriesPer100g: 900,
  fatsPer100g: 100,
  proteinsPer100g: 0,
  carbsPer100g: 0,
}

export const noLipidsFoodStub = {
  name: "Almond",
  category: "other" as FoodCategory,
  caloriesPer100g: 400,
  fatsPer100g: 0,
  proteinsPer100g: 50,
  carbsPer100g: 50,
}
