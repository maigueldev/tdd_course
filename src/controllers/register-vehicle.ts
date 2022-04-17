import { httpRequest, httpResponse } from '../interfaces/http-interfaces'

export class RegisterVehicle {
  handle (httpRequest: httpRequest): httpResponse {
    if (!('name' in httpRequest.body)) {
      return {
        statusCode: 400,
        body: new Error('Error in the: name')
      }
    }

    if (!('model' in httpRequest.body)) {
      return {
        statusCode: 400,
        body: new Error('Error in the: model')
      }
    }

    return {
      statusCode: 201,
      body: 'Vehicle is created'
    }
  }
}
