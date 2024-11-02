import retrieveDishUsecase from "../../src/application/retrieve-dish.usecase"
import { Dish } from "../../src/domain/dish.entity"
import { IDishRepository } from "../../src/domain/interface/dish.repository.interface"
import { InMemoryDishRepository } from "../../src/infrastructure/repository/in-memory-dish.repository"
import { singleDishStub } from "../double/dish.stub"

describe("retrieve dish usecase", () => {
  let retrieveDish: (uuid: string) => Promise<Dish | undefined>
  let dishRepository: IDishRepository

  beforeEach(() => {
    dishRepository = new InMemoryDishRepository()
    retrieveDish = retrieveDishUsecase(dishRepository)
    dishRepository.save({
      uuid: "123456",
      ...singleDishStub,
    })
  })

  it("should return a dish by uuid", async () => {
    const dish = await retrieveDish("123456")
    expect(dish).toEqual({ uuid: "123456", ...singleDishStub })
  })
})
