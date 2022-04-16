export class RegisterVehicle {
  handle (httpRequest: any): any {
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
  }
}
