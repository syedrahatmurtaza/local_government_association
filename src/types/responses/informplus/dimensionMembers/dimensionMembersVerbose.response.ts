export interface IDimensionMemberVerboseGetResponse {
  'dimensionMember-array': DimensionMembersVerbose[]
}

export interface DimensionMembersVerbose {
  identifier: string
  label: string
  dimension: Dimension
  isDefaultMember: boolean
  description?: string
}

export interface Dimension {
  identifier: string
  label: string
}
