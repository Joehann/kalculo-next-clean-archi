import deterministicUuidProvider from "../../../../core/providers/di/uuidProvider/deterministicUuidProvider"
import addCustomFoodUsecase from "../../src/application/add-custom-food.usecase"
import { Food } from "../../src/domain/food.entity"
import { FoodRepository } from "../../src/domain/repository/food.repository"
import { InMemoryFoodRepository } from "../../src/infrastructure/repository/food-in-memory.repository"
import { singleFoodStub } from "../double/food.stub"

describe("addCustomFood Use Case", () => {
  let addFood: (food: Food) => void
  let foodRepository: FoodRepository
  let uuidProvider: () => string

  beforeEach(() => {
    foodRepository = new InMemoryFoodRepository()
    uuidProvider = deterministicUuidProvider
    addFood = addCustomFoodUsecase(foodRepository, uuidProvider)
  })

  it("should save a custom food item to the repository", async () => {
    addFood(singleFoodStub)

    const foodCollection = await foodRepository.findAll()

    expect(foodCollection[0]).toEqual({
      uuid: "123456",
      ...singleFoodStub,
    })
  })
})
