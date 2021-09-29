import { Controller, Get, Path, Route, Security, Tags } from '@tsoa/runtime'
import { DimensionsRepository } from '../repositories/dimensions.repository'
import { IDimensionsGetResponse } from '../types/responses/informPlus/dimensions/dimension.response'
import { IDimensionsIdentifierGetResponse } from '../types/responses/informPlus/dimensions/dimensionIdentifier.response'
import { IDimensionsVerboseGetResponse } from '../types/responses/informPlus/dimensions/dimensionVerbose.response'

@Route('v1/dimensions')
@Tags('dimensions')
export class DimensionsController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Groups of related dimension members. Dimensions are synonymous with circumstance collections, as listed on the standards site
   * @returns IDimensionsGetResponse
   */
  @Get('/')
  @Security('apiKeyAuth')
  async getDimensions(): Promise<IDimensionsGetResponse> {
    const response: IDimensionsGetResponse =
      await new DimensionsRepository().getDimensions()
    return response
  }

  /**
   * @summary List of all dimensions, giving their full details
   * @returns IDimensionsVerboseGetResponse
   */
  @Get('/verbose')
  @Security('apiKeyAuth')
  async getDimensionsVerbose(): Promise<IDimensionsVerboseGetResponse> {
    const response: IDimensionsVerboseGetResponse =
      await new DimensionsRepository().getDimensionsVerbose()
    return response
  }

  /**
   * @summary Full details of a single dimension, selected by its identifier
   * @param identifier (Assessmentperiod)
   * @returns IDimensionsIdentifierGetResponse
   */
  @Get('/{identifier}')
  @Security('apiKeyAuth')
  async getDimensionsIdentifier(
    @Path() identifier: string
  ): Promise<IDimensionsIdentifierGetResponse> {
    const response: IDimensionsIdentifierGetResponse =
      await new DimensionsRepository().getDimensionsIdentifier(identifier)
    return response
  }
}
