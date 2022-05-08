// eslint-disable-next-line node/no-deprecated-api
import { parse, UrlWithParsedQuery } from 'url'

export class UrlRequest {
  public static parseUrl (url: string): UrlWithParsedQuery {
    return parse(url, true)
  }
}
