import { Food } from "../domain/food.entity"

const calculateKetoRatio = (food: Food) => {
  if (food.fatsPer100g === 100) return "∞"

  const ratio =
    Math.round(
      100 * (food.fatsPer100g / (food.carbsPer100g + food.proteinsPer100g))
    ) / 100

  return `${ratio}:1`
}

export default calculateKetoRatio
