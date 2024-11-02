import type { FoodCollection } from "../domain/food.collection"
import type { Food } from "../domain/food.entity"

const addFoodToTheCollectionUsecase =
  (collection: FoodCollection) =>
  (food: Food): FoodCollection => {
    return [...collection, food]
  }

export default addFoodToTheCollectionUsecase
