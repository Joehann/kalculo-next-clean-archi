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

export const dishWithTwoFoodsStub: Dish = {
  ...singleDishStub,
  foods: [
    ...singleDishStub.foods,
    {
      foodUuid: "654321",
      quantity: 200,
    },
  ],
}
