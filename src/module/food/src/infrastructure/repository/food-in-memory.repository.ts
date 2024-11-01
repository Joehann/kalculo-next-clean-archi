import { Food } from "../../domain/food.entity"
import { FoodRepository } from "../../domain/repository/food.repository"

export class InMemoryFoodRepository implements FoodRepository {
  private foodCollection: Food[] = []

  public async save(food: Food): Promise<void> {
    this.foodCollection.push(food)
  }

  public async find(uuid: string): Promise<Food | undefined> {
    return this.foodCollection.find((food) => food.uuid === uuid)
  }

  public async findAll(): Promise<Food[]> {
    return this.foodCollection
  }
}