import { DishType } from "./type/dish-type.type"

export type Dish = {
  uuid?: string
  name: string
  type: DishType
  description?: string
  foods: {
    foodUuid: string
    quantity: number
  }[]
  isRecipe?: boolean
}
