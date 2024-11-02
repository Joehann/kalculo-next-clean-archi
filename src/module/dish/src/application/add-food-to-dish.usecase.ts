import { Food } from "@/module/food/src/domain/food.entity"
import type { Dish } from "../domain/dish.entity"

const addFoodToDishUsecase =
  (dish: Dish) =>
  (foodToAdd: Food, quantity: number): Dish => {
    if (!foodToAdd.uuid) {
      throw new Error("Food must have a uuid")
    }

    const foods = [
      ...dish.foods,
      {
        foodUuid: foodToAdd.uuid,
        quantity,
      },
    ]

    return {
      ...dish,
      foods,
    }
  }

export default addFoodToDishUsecase
