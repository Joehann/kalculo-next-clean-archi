import { Food } from "../food.entity"

export interface FoodRepository {
  save(food: Food): Promise<void>
  find(uuid: string): Promise<Food | undefined>
  findAll(): Promise<Food[]>
}
