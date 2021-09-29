export interface IListIdenfitierGetResponse {
  item: IListIdenfitierGetResponseItem
}

export interface IListIdenfitierGetResponseItem {
  identifier: string
  label: string
  uri: string
  children: any[]
  parents: any[]
  mappings: MappingsIdentifier
  lists: List[]
}

export interface List {
  identifier: string
  label: string
  description: string
  uri: string
  itemBaseUri: string
  itemCurieStub: string
  itemType: ListItemType
}

export interface ListItemType {
  identifier: string
  label: string
  uri: string
}

export interface MappingsIdentifier {
  contains: Contains
}

export interface Contains {
  label: string
  items: ItemElement[]
}

export interface ItemElement {
  identifier: string
  label: string
  description: string
  uri: string
  itemType: ItemItemType
}

export interface ItemItemType {
  identifier: string
  label: string
  URI: string
}
