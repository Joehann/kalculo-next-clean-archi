import type { UuidProvider } from "@/core/providers/uuidProvider/uuidProvider.type"
import { haveDishAtLeastOneFood, type Dish } from "../domain/dish.entity"
import type { IDishRepository } from "../domain/interface/dish.repository.interface"

const createNewDishUsecase =
  (repository: IDishRepository, uuidProvider: UuidProvider) =>
  async (dish: Dish): Promise<void> => {
    if (!haveDishAtLeastOneFood(dish)) {
      throw new Error("Dish must have at least one food")
    }

    const uuid = uuidProvider()
    const dishWithUuid = {
      uuid,
      ...dish,
    }

    await repository.save(dishWithUuid)
  }

export default createNewDishUsecase
