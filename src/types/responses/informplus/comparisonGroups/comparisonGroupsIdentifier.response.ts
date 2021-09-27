import { Type } from '../areas/areaIdentifier.response'

export interface IComparisonGroupsIdentifierGetResponse {
  comparisonGroup: ComparisonGroupIdentifier
}

export interface ComparisonGroupIdentifier {
  identifier: string
  isCustom: boolean
  label: string
  members: Member[]
  owners: Member[]
  isMain: boolean
  isHidden: boolean
  bottomTier: Tier
  topTier: Tier
  type: Type
}

export interface Tier {
  identifier: string
  isCustom: boolean
  label: string
  type: Type
}

export interface Member {
  identifier: string
  label: string
  shortLabel: string
  longLabel: string
  areaType?: Member
  isGroup?: boolean
}
