import calculateKetoRatioUsecase from "../../src/application/calculate-keto-ratio.usecase"
import {
  singleFoodStub,
  onlyLipidsFoodStub,
  noLipidsFoodStub,
} from "../double/food.stub"

describe("calculateKetoRatio [lipids/(carbs + proteins)]", () => {
  it("should calculate the keto ratio", () => {
    const ketoRatio = calculateKetoRatioUsecase(singleFoodStub)
    expect(ketoRatio).toBe("1.09:1")
  })

  it("should return infinite for only lipds food (oil)", () => {
    const ketoRatio = calculateKetoRatioUsecase(onlyLipidsFoodStub)
    expect(ketoRatio).toBe("∞")
  })

  it("should return 0 for no lipids food", () => {
    const ketoRatio = calculateKetoRatioUsecase(noLipidsFoodStub)
    expect(ketoRatio).toBe("0")
  })
})
