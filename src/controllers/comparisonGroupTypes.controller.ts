import {
  Controller,
  Get,
  Path,
  Query,
  Route,
  Security,
  Tags,
} from '@tsoa/runtime'
import { ComparisonGroupTypesRepository } from '../repositories/comparisonGroupTypes.repository'
import { IComparisonGroupTypesGetResponse } from '../types/responses/informPlus/comparisonGroupTypes/comparisonGroupTypes.response'
import { IComparisonGroupTypesIdentifierGetResponse } from '../types/responses/informPlus/comparisonGroupTypes/comparisonGroupTypesIdentifier.response'
import { IComparisonGroupTypesVerboseGetResponse } from '../types/responses/informPlus/comparisonGroupTypes/comparisonGroupTypesVerbose.response'

@Route('v1/comparisonGroupTypes')
@Tags('comparisonGroupTypes')
export class ComparisonGroupTypesController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Show types of comparison group available
   * @param memberArea Filter groups by area membership
   * @param ownerArea Filter groups by a specific area owner
   * @returns IComparisonGroupTypesGetResponse
   */
  @Get('/')
  @Security('apiKeyAuth')
  async getComparisonGroupTypes(
    @Query() memberArea?: string,
    @Query() ownerArea?: string
  ): Promise<IComparisonGroupTypesGetResponse> {
    let params: { [k: string]: any } = {}
    memberArea == undefined ? undefined : (params.memberArea = memberArea)
    ownerArea == undefined ? undefined : (params.ownerArea = ownerArea)
    const response: IComparisonGroupTypesGetResponse =
      await new ComparisonGroupTypesRepository().getComparisonGroupTypes(params)
    return response
  }

  /**
   * @summary Show full details of comparison group types available
   * @returns IComparisonGroupTypesVerboseGetResponse
   */
  @Get('/verbose')
  @Security('apiKeyAuth')
  async getComparisonGroupTypesVerbose(): Promise<IComparisonGroupTypesVerboseGetResponse> {
    const response: IComparisonGroupTypesVerboseGetResponse =
      await new ComparisonGroupTypesRepository().getComparisonGroupTypesVerbose()
    return response
  }

  /**
   * @summary Show details of a specified comparison group
   * @param identifier (AllLaInRegion)
   * @returns IComparisonGroupTypesIdentifierGetResponse
   */
  @Get('/{identifier}')
  @Security('apiKeyAuth')
  async getComparisonGroupTypesIdentifier(
    @Path() identifier: string
  ): Promise<IComparisonGroupTypesIdentifierGetResponse> {
    const response: IComparisonGroupTypesIdentifierGetResponse =
      await new ComparisonGroupTypesRepository().getComparisonGroupTypesIdentifier(
        identifier
      )
    return response
  }
}
