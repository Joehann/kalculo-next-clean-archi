import { Dish } from "../dish.entity"

export interface IDishRepository {
  save: (dish: Dish) => Promise<void>
  findAll: () => Promise<Dish[]>
  find: (uuid: string) => Promise<Dish | undefined>
}
