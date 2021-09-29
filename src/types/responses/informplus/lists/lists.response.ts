export interface IListGetResponse {
  'list-array': ListArray[]
}

export interface ListArray {
  identifier: string
  label: string
  description: string
  uri: string
  itemBaseUri: string
  itemCurieStub: string
  itemType: ItemType
}

export interface ItemType {
  identifier: string
  label: string
  uri: string
}
