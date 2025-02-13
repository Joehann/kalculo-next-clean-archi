import deterministicUuidProvider from "../../../../core/providers/uuidProvider/deterministicUuidProvider"
import addCustomFoodUsecase from "../../src/application/add-custom-food.usecase"
import { Food } from "../../src/domain/food.entity"
import { IFoodRepository } from "../../src/domain/interface/food.repository.interface"
import { InMemoryFoodRepository } from "../../src/infrastructure/repository/food-in-memory.repository"
import { singleFoodStub } from "../double/food.stub"

describe("addCustomFood Use Case", () => {
  let addFood: (food: Food) => void
  let foodRepository: IFoodRepository
  let uuidProvider: () => string

  beforeEach(() => {
    foodRepository = new InMemoryFoodRepository()
    uuidProvider = deterministicUuidProvider
    addFood = addCustomFoodUsecase(foodRepository, uuidProvider)
  })

  it("should save a custom food item to the repository", async () => {
    await addFood(singleFoodStub)

    const foodCollection = await foodRepository.findAll()

    expect(foodCollection[0]).toEqual({
      uuid: "123456",
      ...singleFoodStub,
    })
  })
})
