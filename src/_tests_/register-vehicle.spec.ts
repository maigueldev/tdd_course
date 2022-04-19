import { RegisterVehicle } from '../controllers/register-vehicle'
import { MissingFormalParameter } from '../errors/client-error'

describe('RegisterVehicle', () => {
  test('is the name does not exist return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        model: 'Tiggo 2',
        year: 2020,
        color: 'black'
        // name: 'Chery'
      }
    }
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('name'))
  })

  test('is the model does not exist return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Chery',
        year: 2020,
        color: 'black'
        // model: 'Tiggo 2',
      }
    }
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('model'))
  })

  test('is the color does not exist return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Chery',
        model: 'Tiggo 2',
        year: 2020
        // color: 'black'
      }
    }
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('color'))
  })

  test('its ok, return 201', () => {
    const sut = new RegisterVehicle()
    const httpRequest = {
      body: {
        name: 'Chery',
        model: 'Tiggo 2',
        year: 2020,
        color: 'black'
      }
    }
    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(201)
    expect(httpResponse.body).toEqual('Vehicle is created')
  })
})
