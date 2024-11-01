import calculatePortionValuesUsecase from "../../src/application/calculate-portion-values.usecase"
import { singleFoodStub } from "../double/food.stub"

describe("calculatePortionValues", () => {
  it("should calculate nutritional values for a portion (1g of carbs)", () => {
    const portionValues = calculatePortionValuesUsecase(singleFoodStub)

    expect(portionValues).toEqual({
      calories: 26.32,
      fats: 2.27,
      proteins: 1.09,
      amountInGrams: 4.55,
    })
  })
})
