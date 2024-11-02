import type { Dish } from "../../domain/dish.entity"
import type { IDishRepository } from "../../domain/interface/dish.repository.interface"

export class InMemoryDishRepository implements IDishRepository {
  private dishCollection: Dish[] = []

  public async save(dish: Dish): Promise<void> {
    this.dishCollection.push(dish)
  }

  public async find(uuid: string): Promise<Dish | undefined> {
    return this.dishCollection.find((dish) => dish.uuid === uuid)
  }

  public async findAll(): Promise<Dish[]> {
    return this.dishCollection
  }
}
