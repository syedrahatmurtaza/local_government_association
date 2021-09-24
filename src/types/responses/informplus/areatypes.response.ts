export interface IAreaTypeGetResponse {
  'areaType-array': AreaTypeArray[]
}

export interface AreaTypeArray {
  identifier: string
  label: string
  shortLabel: string
  longLabel: string
  isGroup: boolean
}
