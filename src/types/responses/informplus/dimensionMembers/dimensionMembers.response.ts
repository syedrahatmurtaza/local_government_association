export interface IDimensionMemberGetResponse {
  'dimensionMember-array': DimensionMember[]
}

export interface DimensionMember {
  identifier: string
  label: string
}
