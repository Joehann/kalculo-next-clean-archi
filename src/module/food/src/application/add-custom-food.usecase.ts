import type { UuidProvider } from "@/core/providers/uuidProvider/uuidProvider.type"
import type { IFoodRepository } from "../domain/interface/food.repository.interface"
import type { Food } from "../domain/food.entity"

const addCustomFoodUsecase =
  (repository: IFoodRepository, uuidProvider: UuidProvider) =>
  async (food: Food): Promise<void> => {
    const foodWithUuid = {
      uuid: uuidProvider(),
      ...food,
    }
    await repository.save(foodWithUuid)
  }

export default addCustomFoodUsecase
