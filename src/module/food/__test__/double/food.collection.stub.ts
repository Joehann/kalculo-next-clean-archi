import { FoodCategory } from "../../src/domain/food.entity"

export const foodCollectionStub = [
  {
    uuid: "123456",
    name: "Almond",
    category: "vegetable" as FoodCategory,
    caloriesPer100g: 579,
    fatsPer100g: 50,
    proteinsPer100g: 24,
    carbsPer100g: 22,
  },
  {
    uuid: "234567",
    name: "Tomato",
    category: "vegetable" as FoodCategory,
    caloriesPer100g: 18,
    fatsPer100g: 0.2,
    proteinsPer100g: 0.6,
    carbsPer100g: 3.3,
  },
  {
    uuid: "345678",
    name: "Chicken",
    category: "meat" as FoodCategory,
    caloriesPer100g: 165,
    fatsPer100g: 3.5,
    proteinsPer100g: 29.2,
    carbsPer100g: 0,
  },
  {
    uuid: "654321",
    name: "Beef",
    category: "meat" as FoodCategory,
    caloriesPer100g: 165,
    fatsPer100g: 3.5,
    proteinsPer100g: 29.2,
    carbsPer100g: 0,
  },
]
