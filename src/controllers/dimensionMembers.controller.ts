import { Controller, Get, Path, Route, Security, Tags } from '@tsoa/runtime'
import { DimensionMembersRepository } from '../repositories/dimensionMembers.repository'
import { IDimensionMemberGetResponse } from '../types/responses/informPlus/dimensionMembers/dimensionMembers.response'
import { IDimensionMembersIdentifierGetResponse } from '../types/responses/informPlus/dimensionMembers/dimensionMembersIdentifier.response'
import { IDimensionMemberVerboseGetResponse } from '../types/responses/informPlus/dimensionMembers/dimensionMembersVerbose.response'

@Route('v1/dimensionMembers')
@Tags('dimensionMembers')
export class DimensionMembersController extends Controller {
  constructor() {
    super()
  }

  /**
   * Dimension members are synonymous with circumstances, and dimensions with cirumstance collections, as listed on the standards site. Dimension members may apply to multiple metric types, and each metric type can be related to multiple dimension members. For example the metric type for males aged 0-17 has the dimension members of both male in the gender dimension and 0-17 in the social aervices age bands dimension
   * @summary List of all dimension members
   * @returns IDimensionMemberGetResponse
   */
  @Get('/')
  @Security('apiKeyAuth')
  async getDimensionMembers(): Promise<IDimensionMemberGetResponse> {
    const response: IDimensionMemberGetResponse =
      await new DimensionMembersRepository().getDimensionMembers()
    return response
  }

  /**
   * @summary Full details for all dimension members
   * @returns IDimensionMemberVerboseGetResponse
   */
  @Get('/verbose')
  @Security('apiKeyAuth')
  async getDimensionMembersVerbose(): Promise<IDimensionMemberVerboseGetResponse> {
    const response: IDimensionMemberVerboseGetResponse =
      await new DimensionMembersRepository().getDimensionMembersVerbose()
    return response
  }

  /**
   * @summary Full details for a single dimension member, selected via the identifier
   * @param identifier (Caredelaycause_Adultsocialcare)
   * @returns IDimensionMembersIdentifierGetResponse
   */
  @Get('/{identifier}')
  @Security('apiKeyAuth')
  async getDimensionMembersIdentifier(
    @Path() identifier: string
  ): Promise<IDimensionMembersIdentifierGetResponse> {
    const response: IDimensionMembersIdentifierGetResponse =
      await new DimensionMembersRepository().getDimensionMembersIdentifier(
        identifier
      )

    return response
  }
}
