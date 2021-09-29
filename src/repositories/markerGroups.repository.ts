import { MarkerGroupsService } from '../services/informplus/markerGroups.service'
import { IMarkerGroupsGetResponse } from '../types/responses/informPlus/markerGroups/markerGroups.response'

export class MakerGroupsRepository {
  constructor() {}

  async getMarkerGroups(params: any) {
    const response = await new MarkerGroupsService().getMarkerGroups(params)
    return <IMarkerGroupsGetResponse>response.data
  }
}
