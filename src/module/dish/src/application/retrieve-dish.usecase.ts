import { Dish } from "../domain/dish.entity"
import { IDishRepository } from "../domain/interface/dish.repository.interface"

const retrieveDishUsecase =
  (repository: IDishRepository) =>
  async (uuid: string): Promise<Dish | undefined> => {
    return await repository.find(uuid)
  }

export default retrieveDishUsecase
