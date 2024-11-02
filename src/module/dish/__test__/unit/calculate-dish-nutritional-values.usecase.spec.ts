import { foodCollectionStub } from "../../../food/__test__/double/food.collection.stub"
import calculateDishNutritionalValuesUsecase from "../../src/application/calculate-dish-nutritional-values.usecase"
import { dishWithTwoFoodsStub } from "../double/dish.stub"

describe("calculateDishNutritionalValuesUsecase", () => {
  it("should calculate the nutritional values of a dish", () => {
    const foodCollection = foodCollectionStub
    const calculate = calculateDishNutritionalValuesUsecase(foodCollection)
    const dish = dishWithTwoFoodsStub

    const result = calculate(dish)

    expect(result).toEqual({
      totalCalories: 909,
      totalCarbs: 22,
      totalFats: 57,
      totalProteins: 82.4,
      totalRatio: 0.55,
    })
  })
})
