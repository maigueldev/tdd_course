import { FoodModel } from '../models/food-model'

describe('Classes', () => {
  it('Class FoodModel', () => {
    const foodModel = new FoodModel({
      name: 'Hot Dog',
      description: 'Fast food',
      price: 1.5
    })

    expect(foodModel.getName()).toEqual('Hot Dog')
    expect(foodModel.getDescription()).toEqual('Fast food')
    expect(foodModel.getPrice()).toBe(1.5)
  })
})
