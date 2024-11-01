import { Food } from "../domain/food.entity"
import { FoodRepository } from "../domain/interface/food.repository.interface"

const addCustomFoodUsecase =
  (repository: FoodRepository, uuidProvider: () => string) =>
  async (food: Food): Promise<void> => {
    const foodWithUuid = {
      uuid: uuidProvider(),
      ...food,
    }
    await repository.save(foodWithUuid)
  }

export default addCustomFoodUsecase
