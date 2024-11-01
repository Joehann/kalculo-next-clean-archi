import calculateKetoRatioUsecase from "../../src/application/calculate-keto-ratio.usecase"
import { singleFoodStub, oilStub, noLipidsFoodStub } from "../double/food.stub"

describe("calculateKetoRatio", () => {
  it("should calculate the keto ratio", () => {
    const ketoRatio = calculateKetoRatioUsecase(singleFoodStub)
    expect(ketoRatio).toBe("1.09:1")
  })

  it("should infinite ratio for oil", () => {
    const ketoRatio = calculateKetoRatioUsecase(oilStub)
    expect(ketoRatio).toBe("∞")
  })

  it("should return 0 for 0 fats", () => {
    const ketoRatio = calculateKetoRatioUsecase(noLipidsFoodStub)
    expect(ketoRatio).toBe("0:1")
  })
})
