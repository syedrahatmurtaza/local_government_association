export interface IMarkerGroupsGetResponse {
  'markerGroup-array': MarkerGroupMarkerGroup[]
}

export interface MarkerGroupMarkerGroup {
  id: number
  label: string
  description?: string
  aggregableOverTime: boolean
  agencyIdentifier?: string
  fields: FieldMarkerGroup[]
}

export interface FieldMarkerGroup {
  id: number
  label: string
  sort: number
}
