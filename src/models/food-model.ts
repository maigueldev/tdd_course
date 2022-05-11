import { FoodModelHelper } from '../helpers/food-model-helper'

export class FoodModel {
  constructor (private readonly food: FoodModelHelper) {
  }

  getName (): string {
    return this.food.name
  }

  getDescription (): string {
    return this.food.description
  }

  getPrice (): number {
    return this.food.price
  }

  getFood (): any {
    return Object.assign(this, this.food)
  }
}
