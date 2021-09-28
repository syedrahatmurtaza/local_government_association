export interface IDataSetGetResponse {
  'dataset-array': Dataset[]
}

export interface Dataset {
  identifier: string
  label: string
}
