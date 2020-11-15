export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT ='PUT',
}

export interface APIRequest {
  method: Methods,
  path: string,
  domain?: string,
  body?: Object,
}
