import { FoodCollection } from "@/module/food/src/domain/food.collection"
import { Dish } from "../domain/dish.entity"
import calculateKetoRatio from "../../../../core/utils/calculation/ketoRatio"

const calculateDishNutritionalValuesUsecase =
  (foodCollection: FoodCollection) =>
  (
    dish: Dish
  ): {
    totalCalories: number
    totalCarbs: number
    totalFats: number
    totalProteins: number
    totalRatio: string
    totalQuantity: number
  } => {
    const foodUuidList = dish.foods.map((food) => food.foodUuid)
    const filteredFoods = foodCollection.filter(
      (food) => !food.uuid || foodUuidList.includes(food.uuid)
    )

    const foodsWithQuantities = filteredFoods.map((food) => {
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
    let totalQuantity = 0

    for (const food of foodsWithQuantities) {
      totalCalories += (food.caloriesPer100g * food.quantity) / 100
      totalCarbs += (food.carbsPer100g * food.quantity) / 100
      totalFats += (food.fatsPer100g * food.quantity) / 100
      totalProteins += (food.proteinsPer100g * food.quantity) / 100
      totalQuantity += food.quantity
    }

    const totalRatio = calculateKetoRatio(totalQuantity)({
      carbs: totalCarbs,
      fats: totalFats,
      proteins: totalProteins,
    })

    return {
      totalCalories,
      totalCarbs,
      totalFats,
      totalProteins,
      totalRatio,
      totalQuantity,
    }
  }

export default calculateDishNutritionalValuesUsecase
