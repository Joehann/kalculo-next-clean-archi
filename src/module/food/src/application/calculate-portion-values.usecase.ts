import { FoodPortion } from "../domain/food-portion.entity"
import { Food } from "../domain/food.entity"

const calculatePortionValuesUsecase = (food: Food): FoodPortion => {
  const amountInGrams = 100 / food.carbsPer100g
  const calculate = calculateQuantityPerPortion(amountInGrams)
  return {
    amountInGrams: Number(amountInGrams.toFixed(1)),
    carbs: 1,
    calories: calculate(food.caloriesPer100g),
    fats: calculate(food.fatsPer100g),
    proteins: calculate(food.proteinsPer100g),
  }
}

export default calculatePortionValuesUsecase

export const calculateQuantityPerPortion =
  (amount: number) => (value: number | string) => {
    return Number(((Number(value) * amount) / 100).toFixed(2))
  }
