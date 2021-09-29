export interface IListTagGetResponse {
  list: ListTag
}

export interface ListTag {
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
  items: ItemTag[]
}

export interface ItemTag {
  identifier: string
  label: string
  uri: string
  parents: any[]
}
