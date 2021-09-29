import { Controller, Get, Query, Route, Security, Tags } from '@tsoa/runtime'
import { MakerGroupsRepository } from '../repositories/markerGroups.repository'
import { IMarkerGroupsGetResponse } from '../types/responses/informPlus/markerGroups/markerGroups.response'

@Route('v1/markerGroups')
@Tags('markerGroups')
export class MarkerGroupsController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Show details and content of marker groups
   * @param categoryTypeId Get marker groups for a specific category
   * @param organisationID Get marker groups owned by a specific organisation
   * @returns IMarkerGroupsGetResponse
   */
  @Get('/')
  @Security('apiKeyAuth')
  async getMarkerGroups(
    @Query() categoryTypeId: string,
    @Query() organisationID?: string
  ): Promise<IMarkerGroupsGetResponse> {
    let params: { [k: string]: any } = {}
    categoryTypeId == undefined
      ? undefined
      : (params.categoryTypeId = categoryTypeId)
    organisationID == undefined
      ? undefined
      : (params.organisationID = organisationID)
    const response: IMarkerGroupsGetResponse =
      await new MakerGroupsRepository().getMarkerGroups(params)
    return response
  }
}
