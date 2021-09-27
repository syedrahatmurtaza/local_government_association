import { AreaTypeArray } from './areaTypes.response'

export interface IAreaTypeVerboseGetResponse {
  'areaType-array': AreaTypeArrayVerbose[]
}

export interface AreaTypeArrayVerbose {
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
  description?: string
}
