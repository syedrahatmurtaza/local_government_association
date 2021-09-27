import {
  Controller,
  Get,
  Path,
  Query,
  Route,
  Security,
  Tags,
} from '@tsoa/runtime'

import { AreaTypesRepository } from '../repositories/areaTypes.repositories'
import { IAreaTypeIdentifierGetResponse } from '../types/responses/informPlus/areaTypeIdentifier.response'
import { IAreaTypeGetResponse } from '../types/responses/informPlus/areaTypes.response'
import { IAreaTypeCurrentGetResponse } from '../types/responses/informPlus/areaTypesCurrent.response'
import { IAreaTypeFilterDataGetResponse } from '../types/responses/informPlus/areatypesFilterData.response'
import { IAreaTypeVerboseGetResponse } from '../types/responses/informPlus/areaTypesVerbose.response'

@Route('v1/areaTypes')
@Tags('areaTypes')
export class AreaTypesController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Returns area types, including detailed area types such as MBC and London borough.
   * @param area Limit to the area types within a particular area (E09000006)
   * @returns IAreaTypeGetResponse
   */
  @Get('/')
  @Security('apiKeyAuth')
  async getAreaTypes(@Query() area?: string): Promise<IAreaTypeGetResponse> {
    let params: { [k: string]: any } = {}
    area == undefined ? undefined : (params.area = area)
    const response: IAreaTypeGetResponse =
      await new AreaTypesRepository().getAreaTypes(params)
    return response
  }

  /**
   * @summary Current user's area type. Requires a call using OAuth to retrieve data
   * @returns IAreaTypeCurrentGetResponse
   */
  @Get('/current')
  @Security('apiKeyAuth')
  async getAreaTypesCurrent(): Promise<IAreaTypeCurrentGetResponse> {
    const response: IAreaTypeCurrentGetResponse =
      await new AreaTypesRepository().getAreaTypesCurrent()
    return response
  }

  /**
   * @summary Area types which have data for a particular metric type and time period
   * @param metricType Show which area levels have data for a particular metric type (3214)
   * @param period Show which area levels have data for a particular time period (cal_2005)
   * @returns IAreaTypeFilterDataGetResponse
   */
  @Get('/filter-data')
  @Security('apiKeyAuth')
  async getAreaTypesFilterData(
    @Query() metricType?: string,
    @Query() period?: string
  ): Promise<IAreaTypeFilterDataGetResponse> {
    let params: { [k: string]: any } = {}
    metricType == undefined ? undefined : (params.metricType = metricType)
    period == undefined ? undefined : (params.period = period)
    const response: IAreaTypeFilterDataGetResponse =
      await new AreaTypesRepository().getAreaTypesFilterData(params)
    return response
  }

  /**
   * @summary List of all details for all area types
   * @param isMain Filter down to main official geographies
   * @returns IAreaTypeVerboseGetResponse
   */
  @Get('/verbose')
  @Security('apiKeyAuth')
  async getAreaTypesVerbose(@Query() isMain?: number) {
    let params: { [k: string]: any } = {}
    isMain == undefined ? undefined : (params.isMain = isMain)
    const response: IAreaTypeVerboseGetResponse =
      await new AreaTypesRepository().getAreaTypesVerbose(params)
    return response
  }

  /**
   * @summary Details about a particular area type
   * @param identifier (District)
   * @returns IAreaTypeIdentifierGetResponse
   */
  @Get('/{identifier}')
  @Security('apiKeyAuth')
  async getAreaTypesWithIdentifier(
    @Path() identifier: string
  ): Promise<IAreaTypeIdentifierGetResponse> {
    const response: IAreaTypeIdentifierGetResponse =
      await new AreaTypesRepository().getAreaTypesWithIdentifier(identifier)

    return response
  }
}
