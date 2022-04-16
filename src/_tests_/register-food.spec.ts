import { RegisterFood } from '../controllers/register-food'

describe('RegisterFood', () => {
  test('is the name does not exist return 400', () => {
    const sut = new RegisterFood()
    const httpRequest = {
      body: {
        // name: 'Hot dog',
        description: 'Fast food',
        price: 1.5
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Error in the: name'))
  })

  test('is the description does not exist return 400', () => {
    const sut = new RegisterFood()
    const httpRequest = {
      body: {
        name: 'Hot dog',
        // description: 'Fast food',
        price: 1.5
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Error in the: description'))
  })

  test('is the price does not exist return 400', () => {
    const sut = new RegisterFood()
    const httpRequest = {
      body: {
        name: 'Hot dog',
        description: 'Fast food'
        // price: 1.5
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Error in the: price'))
  })

  test('is ok data return 201', () => {
    const sut = new RegisterFood()
    const httpRequest = {
      body: {
        name: 'Hot dog',
        description: 'Fast food',
        price: 1.5
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(201)
    expect(httpResponse.body).toEqual('Register created')
  })
})
