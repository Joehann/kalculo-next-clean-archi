import { Dish } from "../../src/domain/dish.entity"

export const singleDishStub: Dish = {
  name: "Test dish",
  type: "starter",
  description: "Test description",
  foods: [
    {
      foodUuid: "123456",
      quantity: 100,
    },
  ],
  isRecipe: false,
}

export const singleDishWithoutFoodStub: Dish = {
  ...singleDishStub,
  foods: [],
}
