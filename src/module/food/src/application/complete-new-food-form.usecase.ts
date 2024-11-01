import { Food } from "../domain/food.entity"

const completeNewFoodFormUsecase = (
  food: Food
): { isValid: boolean; errorMessage?: string } => {
  if (food.fatsPer100g > 100)
    return { isValid: false, errorMessage: "Fats cannot be greater than 100" }
  if (food.carbsPer100g > 100)
    return { isValid: false, errorMessage: "Carbs cannot be greater than 100" }
  if (food.proteinsPer100g > 100)
    return {
      isValid: false,
      errorMessage: "Proteins cannot be greater than 100",
    }
  return { isValid: true }
}

export default completeNewFoodFormUsecase
