import { Value } from './data.response'

export interface IDataRegressionGetResponse {
  metadata: MetadataRegression
  columns: ColumnRegression[]
  rows: RowRegression[]
  regressions: Regression[]
}

export interface ColumnRegression {
  metricType: MetricType
  period: MetricType
  valueType: MetricType
}

export interface MetricType {
  identifier: string
  label: string
  altLabel?: string
  isSummary: boolean
}

export interface MetadataRegression {
  columnGrouping: string[]
  rowGrouping: string[]
}

export interface Regression {
  coordinates: Coordinate[]
  rSquare: number
  rSquareLog?: number
}

export interface Coordinate {
  x: number
  y: number
}

export interface RowRegression {
  area: MetricType
  values: Value[]
}
