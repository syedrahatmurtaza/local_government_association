import { Type } from '../areas/areaIdentifier.response'

export interface IComparisonGroupsGetResponse {
  'comparisonGroup-array': ComparisonGroup[]
}

export interface ComparisonGroup {
  identifier: string
  isCustom: boolean
  label: string
  type: Type
}
