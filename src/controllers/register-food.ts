export class RegisterFood {
  handle (httpRequest: any): any {
    if (!('name' in httpRequest.body)) {
      return {
        statusCode: 400,
        body: new Error('Error in the: name')
      }
    }

    if (!('description' in httpRequest.body)) {
      return {
        statusCode: 400,
        body: new Error('Error in the: description')
      }
    }

    if (!('price' in httpRequest.body)) {
      return {
        statusCode: 400,
        body: new Error('Error in the: price')
      }
    }

    return {
      statusCode: 201,
      body: 'Register created'
    }
  }
}
