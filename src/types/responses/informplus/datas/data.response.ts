export interface IDataGetResponse {
  metadata: Metadata
  columns: Column[]
  rows: Row[]
}

export interface Column {
  area: Areadata
  metricType: Areadata
  period: Areadata
  valueType: Areadata
}

export interface Areadata {
  identifier: string
  label: string
  altLabel?: string
  isSummary: boolean
}

export interface Metadata {
  columnGrouping: string[]
  rowGrouping: any[]
}

export interface Row {
  values: Value[]
}

export interface Value {
  source: number
  value: number
  formatted: string
  format: string
  publicationStatus: string
}
