import {
  Controller,
  Get,
  Path,
  Query,
  Route,
  Security,
  Tags,
} from '@tsoa/runtime'

import { ComparisonGroupsRepository } from '../repositories/comparisonGroups.repository'
import { IComparisonGroupsGetResponse } from '../types/responses/informPlus/comparisonGroups/comparisonGroups.response'
import { IComparisonGroupsIdentifierBoundsGetResponse } from '../types/responses/informPlus/comparisonGroups/comparisonGroupsIdentiferBound.response'
import { IComparisonGroupsIdentifierGetResponse } from '../types/responses/informPlus/comparisonGroups/comparisonGroupsIdentifier.response'

@Route('v1/comparisonGroups')
@Tags('comparisonGroups')
export class ComparisonGroupsController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Comparison groups are area groupings of different types, such as all district local authorities, or all fire organisations in England. Without parameters, all groups, excluding custom groups, are returned
   * @param mainOnly Only the main comparison groups, so includes groupings by authority type, but excludes things like groupings by near neighbours
   * @param memberArea Groups of which the area is a member, but not necessarily an owner. If area 1 is a near neighbour of area 2, area 1 would be a member of the near neighbour group (along with the other near neighbours) and area 2 would be the owner of the group
   * @param ownerArea Group which the area owns, but is not necessairly a member. An area is generally the owner of a group if the group is a main group, such as all local authorities, or is the area to which a group relates, such as near neighbours of an area
   * @param type Comparison groups of a specified comparison group type for a specified area. For example, which Experian Mosaic near neighbours a particular area has
   * @returns IComparisonGroupsGetResponse
   */
  @Get('/')
  @Security('apiKeyAuth')
  async getComparisonGroup(
    @Query() mainOnly?: string,
    @Query() memberArea?: string,
    @Query() ownerArea?: string,
    @Query() type?: string
  ): Promise<IComparisonGroupsGetResponse> {
    let params: { [k: string]: any } = {}
    mainOnly == undefined ? undefined : (params.mainOnly = mainOnly)
    memberArea == undefined ? undefined : (params.memberArea = memberArea)
    ownerArea == undefined ? undefined : (params.ownerArea = ownerArea)
    type == undefined ? undefined : (params.type = type)
    const response: IComparisonGroupsGetResponse =
      await new ComparisonGroupsRepository().getComparisonGroup(params)
    return response
  }

  /**
   * @summary Returns the details for a particular comparison group
   * @param identifier (AllLAInRegion_London)
   * @returns IComparisonGroupsIdentifierGetResponse
   */
  @Get('/{identifier}')
  @Security('apiKeyAuth')
  async getComparisonGroupIdentifier(
    @Path() identifier: string
  ): Promise<IComparisonGroupsIdentifierGetResponse> {
    const response: IComparisonGroupsIdentifierGetResponse =
      await new ComparisonGroupsRepository().getComparisonGroupIdentifier(
        identifier
      )
    return response
  }

  /**
   * @summary Co-ordinates for the minimum and maxim longitude and latitudes for a particular comparison group
   * @param identifier (Core_English_Cities)
   * @returns IComparisonGroupsIdentifierBoundsGetResponse
   */
  @Get('/{identifier}/bounds')
  @Security('apiKeyAuth')
  async getComparisonGroupIdentifierBounds(
    @Path() identifier: string
  ): Promise<IComparisonGroupsIdentifierBoundsGetResponse> {
    const response: IComparisonGroupsIdentifierBoundsGetResponse =
      await new ComparisonGroupsRepository().getComparisonGroupIdentifierBounds(
        identifier
      )
    return response
  }
}
