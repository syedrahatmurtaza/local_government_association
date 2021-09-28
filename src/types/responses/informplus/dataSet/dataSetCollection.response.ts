export interface IDataSetCollectionGetResponse {
  'datasetCollection-array': DatasetCollection[]
}

export interface DatasetCollection {
  identifier: string
  label: string
  url: string
  isLocalCollectionRequired: boolean
  sourceName: string
  replaces: Replace[]
  replacedBy: Replace[]
}

export interface Replace {
  identifier: string
  label: string
  url: string
  isLocalCollectionRequired: boolean
  sourceName: string
}
