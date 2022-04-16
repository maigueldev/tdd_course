import { VehicleModel } from '../models/vehicle-model'

describe('Classes', () => {
  it('Class VehicleModel', () => {
    const vehicleModel = new VehicleModel('Nissan', 'DTX', 2002)

    expect(vehicleModel.getName()).toEqual('Nissan')
    expect(vehicleModel.getModel()).toEqual('DTX')
    expect(vehicleModel.getYear()).toEqual(2002)
  })
})
