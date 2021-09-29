export interface IListByIDVerboseGetResponse {
  list: IListByIDVerboseGetResponseList
}

export interface IListByIDVerboseGetResponseList {
  identifier: string
  label: string
  description: string
  created: Date
  modified: Date
  fullDescription: string
  accuracy: string
  audience: string
  completeness: string
  coverage: string
  intendedLongevity: string
  issued: Date
  provenance: string
  rights: string
  status: string
  timeliness: string
  version: string
  uri: string
  items: ListItem[]
}

export interface ListItem {
  identifier: string
  label: string
  uri: string
  parents: Parent[]
  mappings: Mappings
  lists: ListElement[]
}

export interface ListElement {
  identifier: string
  label: string
  description: string
  uri: string
  itemBaseUri: string
  itemCurieStub: string
  itemType: Parent
}

export interface Parent {
  identifier: string
  label: string
  uri: string
  itemType?: ItemTypeVerbose
}

export interface ItemTypeVerbose {
  identifier: string
  label: string
  URI: string
}

export interface Mappings {
  delivers?: Delivers
  performs?: Performs
}

export interface Delivers {
  label: string
  items: DeliversItem[]
}

export interface DeliversItem {
  identifier: string
  label: string
  description?: string
  uri: string
  itemType: ItemTypeVerbose
}

export interface Performs {
  label: string
  items: Parent[]
}
