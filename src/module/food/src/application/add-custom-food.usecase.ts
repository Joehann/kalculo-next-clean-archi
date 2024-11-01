import { Food } from "../domain/food.entity"
import { FoodRepository } from "../domain/repository/food.repository"

const addCustomFoodUsecase =
  (repository: FoodRepository, uuidProvider: () => string) =>
  async (food: Food): Promise<Food> => {
    const foodWithUuid = {
      uuid: uuidProvider(),
      ...food,
    }
    await repository.save(foodWithUuid)
    return foodWithUuid
  }

export default addCustomFoodUsecase
