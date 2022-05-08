import { UrlRequest } from '../protocols/protocols-http'

describe('Class http request', () => {
  test('Url login', () => {
    const urlParsed = UrlRequest.parseUrl('http://localhost:3000/login')

    expect(urlParsed.href).toBe('http://localhost:3000/login')
    expect(urlParsed.port).toBe('3000')
  })

  test('Response query', () => {
    const urlParsed = UrlRequest.parseUrl('http://localhost:3000/login?username=username&password=password')
    const expectAuth = {
      username: 'username',
      password: 'password'
    }

    expect(urlParsed.query).toEqual(expectAuth)
  })

  test('URL user', () => {
    const urlParsed = UrlRequest.parseUrl('http://localhost:3000/user')

    expect(urlParsed.href).toBe('http://localhost:3000/user')
    expect(urlParsed.port).toBe('3000')
  })

  test('Response query', () => {
    const urlParsed = UrlRequest.parseUrl('http://localhost:3000/user?username=username&password=password&name=Miguel&lastname=Torrealba')
    const expectAuth = {
      username: 'username',
      password: 'password',
      name: 'Miguel',
      lastname: 'Torrealba'
    }

    expect(urlParsed.query).toEqual(expectAuth)
  })
})
