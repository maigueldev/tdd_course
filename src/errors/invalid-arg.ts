export class InvalidArgument extends Error {
  constructor (public arg: string) {
    super(`Invalid ${arg}`)
  }
}
