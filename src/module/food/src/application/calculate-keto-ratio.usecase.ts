import calculateKetoRatio from "../../../../core/utils/calculation/ketoRatio"
import { Food } from "../domain/food.entity"

const calculateKetoRatioUsecase = (food: Food) => {
  const calculateRatioPer100g = calculateKetoRatio(100)
  return calculateRatioPer100g({
    carbs: food.carbsPer100g,
    fats: food.fatsPer100g,
    proteins: food.proteinsPer100g,
  })
}

export default calculateKetoRatioUsecase
