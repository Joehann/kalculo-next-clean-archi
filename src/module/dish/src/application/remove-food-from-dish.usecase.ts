import type { Dish } from "../domain/dish.entity"

const removeFoodFromDishUsecase =
  (dish: Dish) =>
  (foodUuid: string): Dish => {
    const foods = dish.foods.filter((food) => food.foodUuid !== foodUuid)

    return {
      ...dish,
      foods,
    }
  }

export default removeFoodFromDishUsecase
