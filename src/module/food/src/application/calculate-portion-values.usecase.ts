import { Food } from "../domain/food.entity"

const calculatePortionValuesUsecase = (
  food: Food
): {
  calories: number
  fats: number
  proteins: number
  amountInGrams: number
} => {
  const amountInGrams = 100 / food.carbsPer100g
  const calculate = calculateQuantityPerPortion(amountInGrams)
  return {
    calories: calculate(food.caloriesPer100g),
    fats: calculate(food.fatsPer100g),
    proteins: calculate(food.proteinsPer100g),
    amountInGrams: Number(amountInGrams.toFixed(2)),
  }
}

export default calculatePortionValuesUsecase

export const calculateQuantityPerPortion =
  (amount: number) => (value: number | string) => {
    return Number(((Number(value) * amount) / 100).toFixed(2))
  }
