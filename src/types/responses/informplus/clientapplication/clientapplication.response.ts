export interface IClientApplicationGetResponse {
  clientApplicationArray: ClientApplication[]
}

export interface ClientApplication {
  identifier: string
  label: string
}
