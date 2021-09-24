export interface IAreaGetResponse {
  'area-array': AreaArray[]
}

export interface AreaArray {
  identifier: string
  label: string
  shortLabel: string
  longLabel: string
  areaType: AreaTypeSimple
}

export interface AreaTypeSimple {
  identifier: string
  label: string
  isGroup: boolean
}
