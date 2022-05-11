import { FoodModelHelper } from '../helpers/food-model-helper'
import { FoodModel } from '../models/food-model'

describe('Classes', () => {
  it('Class FoodModel', () => {
    const foodModel = new FoodModel({
      name: 'Hot Dog',
      description: 'Fast food',
      price: 1.5
    })

    expect(foodModel.getFood()).toEqual(foodModel)
    expect(foodModel.getName()).toEqual('Hot Dog')
    expect(foodModel.getDescription()).toEqual('Fast food')
    expect(foodModel.getPrice()).toBe(1.5)
  })

  it('Food Helper', () => {
    const foodHelper = new FoodModelHelper()

    expect(foodHelper).toEqual(foodHelper)
  })
})
