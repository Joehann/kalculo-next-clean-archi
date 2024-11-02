import { FoodCollection } from "@/module/food/src/domain/food.collection"
import { Dish } from "../domain/dish.entity"

const calculateDishNutritionalValuesUsecase =
  (foodCollection: FoodCollection) =>
  (
    dish: Dish
  ): {
    totalCalories: number
    totalCarbs: number
    totalFats: number
    totalProteins: number
    totalRatio: number
  } => {
    const foodUuidList = dish.foods.map((food) => food.foodUuid)
    const filteredFoods = foodCollection.filter(
      (food) => !food.uuid || foodUuidList.includes(food.uuid)
    )

    const foodsWithQuantity = filteredFoods.map((food) => {
      const foodItem = dish.foods.find((f) => f.foodUuid === food.uuid)

      return {
        ...food,
        quantity: foodItem?.quantity ?? 0,
      }
    })

    let totalCalories = 0
    let totalCarbs = 0
    let totalFats = 0
    let totalProteins = 0

    for (const food of foodsWithQuantity) {
      totalCalories += (food.caloriesPer100g * food.quantity) / 100
      totalCarbs += (food.carbsPer100g * food.quantity) / 100
      totalFats += (food.fatsPer100g * food.quantity) / 100
      totalProteins += (food.proteinsPer100g * food.quantity) / 100
    }

    const totalRatio =
      Math.round(100 * (totalFats / (totalCarbs + totalProteins))) / 100

    return {
      totalCalories,
      totalCarbs,
      totalFats,
      totalProteins,
      totalRatio,
    }
  }

export default calculateDishNutritionalValuesUsecase
