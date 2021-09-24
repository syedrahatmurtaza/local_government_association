import { AreaTypeArray } from './areatypes.response'

export interface IAreaTypeIdentifierGetResponse {
  areaType: AreaType
}

export interface AreaType {
  identifier: string
  label: string
  shortLabel: string
  longLabel: string
  isGroup: boolean
  isMain: boolean
  childOf: AreaTypeArray[]
  parentOf: AreaTypeArray[]
  memberOf: AreaTypeArray[]
  sameAs: string[]
}
