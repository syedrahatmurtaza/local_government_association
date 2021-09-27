import { ComparisonGroupsService } from '../services/informplus/comparisonGroups.service'
import { IComparisonGroupsGetResponse } from '../types/responses/informPlus/comparisonGroups/comparisonGroups.response'
import { IComparisonGroupsCurrentGetResponse } from '../types/responses/informPlus/comparisonGroups/comparisonGroupsCurrent.response'
import { IComparisonGroupsIdentifierBoundsGetResponse } from '../types/responses/informPlus/comparisonGroups/comparisonGroupsIdentiferBound.response'
import { IComparisonGroupsIdentifierGetResponse } from '../types/responses/informPlus/comparisonGroups/comparisonGroupsIdentifier.response'

export class ComparisonGroupsRepository {
  constructor() {}

  async getComparisonGroup(params: any) {
    const response = await new ComparisonGroupsService().getComparisonGroup(
      params
    )

    return <IComparisonGroupsGetResponse>response.data
  }

  async getComparisonGroupCurrent(params: any) {
    const response =
      await new ComparisonGroupsService().getComparisonGroupCurrent(params)

    return <IComparisonGroupsCurrentGetResponse>response.data
  }

  async getComparisonGroupIdentifier(identifier: string) {
    const response =
      await new ComparisonGroupsService().getComparisonGroupIdentifier(
        identifier
      )

    return <IComparisonGroupsIdentifierGetResponse>response.data
  }

  async getComparisonGroupIdentifierBounds(identifier: string) {
    const response =
      await new ComparisonGroupsService().getComparisonGroupIdentifierBounds(
        identifier
      )

    return <IComparisonGroupsIdentifierBoundsGetResponse>response.data
  }
}
