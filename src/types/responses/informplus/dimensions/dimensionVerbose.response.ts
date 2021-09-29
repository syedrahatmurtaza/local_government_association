import { DimensionMember } from '../dimensionMembers/dimensionMembers.response'

export interface IDimensionsVerboseGetResponse {
  'dimension-array': DimensionVerbose[]
}

export interface DimensionVerbose {
  identifier: string
  label: string
  canBeSummedToAWhole: boolean
  dimensionMembers: DimensionMember[]
  description?: string
}
