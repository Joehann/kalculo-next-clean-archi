import completeNewFoodFormUsecase from "../../src/application/complete-new-food-form.usecase"
import { singleFoodStub } from "../double/food.stub"

describe("completeNewFoodFormUsecase", () => {
  it("should return isValid and no message if form is ok", () => {
    const result = completeNewFoodFormUsecase(singleFoodStub)
    expect(result).toEqual({ isValid: true })
    expect(result.errorMessage).toBeUndefined()
  })

  it("should not possible to have fats > 100", () => {
    const food = {
      ...singleFoodStub,
      fatsPer100g: 101,
    }
    const result = completeNewFoodFormUsecase(food)
    expect(result).toEqual({
      isValid: false,
      errorMessage: "Fats cannot be greater than 100",
    })
  })

  it("should not possible to have carbs > 100", () => {
    const food = {
      ...singleFoodStub,
      carbsPer100g: 101,
    }
    const result = completeNewFoodFormUsecase(food)
    expect(result).toEqual({
      isValid: false,
      errorMessage: "Carbs cannot be greater than 100",
    })
  })

  it("should not possible to have proteins > 100", () => {
    const food = {
      ...singleFoodStub,
      proteinsPer100g: 101,
    }
    const result = completeNewFoodFormUsecase(food)
    expect(result).toEqual({
      isValid: false,
      errorMessage: "Proteins cannot be greater than 100",
    })
  })
})
