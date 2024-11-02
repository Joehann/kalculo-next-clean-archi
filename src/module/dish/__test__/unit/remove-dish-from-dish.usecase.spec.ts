import removeFoodFromDishUsecase from "../../src/application/remove-food-from-dish.usecase"
import type { Dish } from "../../src/domain/dish.entity"
import { dishWithTwoFoodsStub } from "../double/dish.stub"

describe("remove food from dish usecase", () => {
  let removeFood: (foodUuid: string) => Dish

  beforeEach(() => {
    removeFood = removeFoodFromDishUsecase(dishWithTwoFoodsStub)
  })

  it("should remove a food from the dish", () => {
    const dish = removeFood("123456")
    expect(dish.foods).toHaveLength(1)
    expect(dish.foods[0].foodUuid).toEqual("654321")
  })
})
