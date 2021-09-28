export interface IDataTableGetResponse {
  metricTypeIdentifier: string
  metricTypeLabel: string
  metricTypeAltLabel: string
  metricTypeIsSummary: string
  areaIdentifier: string
  areaLabel: string
  areaAltLabel: string
  areaIsSummary: string
  periodIdentifier: string
  periodLabel: string
  periodAltLabel: string
  periodIsSummary: string
  valueTypeIdentifier: string
  valueTypeLabel: string
  valueTypeIsSummary: string
  value: number
  source: number
  formatted: string
  format: string
  publicationStatus: string
}
