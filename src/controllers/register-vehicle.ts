import { httpRequest, httpResponse } from '../interfaces/http-interfaces'

export class RegisterVehicle {
  handle (httpRequest: httpRequest): httpResponse {
    const requiredProperties = ['name', 'model', 'year', 'color']
    for (const prop of requiredProperties) {
      if (!(prop in httpRequest.body)) {
        return {
          statusCode: 400,
          body: new Error(`Error in the: ${prop}`)
        }
      }
    }

    return {
      statusCode: 201,
      body: 'Vehicle is created'
    }
  }
}
