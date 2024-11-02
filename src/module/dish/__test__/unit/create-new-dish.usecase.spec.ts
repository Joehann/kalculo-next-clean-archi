import createNewDishUsecase from "../../src/application/create-new-dish.usecase"
import { Dish } from "../../src/domain/dish.entity"
import { IDishRepository } from "../../src/domain/interface/dish.repository.interface"
import deterministicUuidProvider from "../../../../core/providers/uuidProvider/deterministicUuidProvider"
import { InMemoryDishRepository } from "../../src/infrastructure/repository/in-memory-dish.repository"
import { singleDishStub, singleDishWithoutFoodStub } from "../double/dish.stub"
import { UuidProvider } from "@/core/providers/uuidProvider/uuidProvider.type"

describe("create new dish usecase", () => {
  let createDish: (dish: Dish) => void
  let dishRepository: IDishRepository
  let uuidProvider: UuidProvider

  beforeEach(() => {
    dishRepository = new InMemoryDishRepository()
    uuidProvider = deterministicUuidProvider
    createDish = createNewDishUsecase(dishRepository, uuidProvider)
  })

  it("should save a new dish item to the repository", async () => {
    await createDish(singleDishStub)
    const dishCollection = await dishRepository.findAll()

    expect(dishCollection[0]).toEqual({
      uuid: "123456",
      ...singleDishStub,
    })
  })

  it("should not save a dish without food", async () => {
    await expect(createDish(singleDishWithoutFoodStub)).rejects.toThrow(
      "Dish must have at least one food"
    )
  })
})
