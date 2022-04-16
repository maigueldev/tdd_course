import { VehicleModel } from '../models/vehicle-model'

describe('Classes', () => {
  it('Class VehicleModel', () => {
    const vehicleModel = new VehicleModel({
      name: 'Nissan',
      model: 'DTX',
      year: 2002,
      price: 50,
      inInventory: true
    })

    expect(vehicleModel.getName()).toEqual('Nissan')
    expect(vehicleModel.getModel()).toEqual('DTX')
    expect(vehicleModel.getYear()).toEqual(2002)
    expect(vehicleModel.getPrice()).toEqual(50)
    expect(vehicleModel.getInInventory()).toEqual(true)
  })
})
