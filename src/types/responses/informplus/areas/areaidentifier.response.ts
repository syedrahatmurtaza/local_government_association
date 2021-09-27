import { AreaTypeArray } from '../areaTypes.response'

export interface IAreaIdentifierGetResponse {
  area: Area
}

export interface Area {
  identifier: string
  label: string
  shortLabel: string
  longLabel: string
  areaType: AreaTypeIdentifer
  boundingBox: BoundingBox
  governedBy: GovernedBy
  memberOf: DefaultComparisonGroup[]
  ownerOf: DefaultComparisonGroup[]
  defaultComparisonGroup: DefaultComparisonGroup
  childOf: AreaTypeIdentifer[]
}

export interface AreaTypeIdentifer {
  identifier: string
  label: string
  shortLabel: string
  longLabel: string
  isGroup: boolean
  areaType: AreaTypeArray
}

export interface BoundingBox {
  minLatitude: number
  maxLatitude: number
  minLongitude: number
  maxLongitude: number
}

export interface DefaultComparisonGroup {
  identifier: string
  isCustom: boolean
  label: string
  type: Type
}

export interface Type {
  identifier: string
  label: string
}

export interface GovernedBy {
  identifier: string
  label: string
  shortLabel: string
  governs: AreaTypeArray
}
