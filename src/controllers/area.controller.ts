import {
  Controller,
  Get,
  Path,
  Query,
  Route,
  Security,
  Tags,
} from '@tsoa/runtime'
import { AreaRepository } from '../repositories/area.repository'
import { IAreaGetResponse } from '../types/responses/informplus/areas/area.response'
import { IAreaIdentifierGetResponse } from '../types/responses/informplus/areas/areaidentifier.response'
import { IAreaIdentifierBoundGetResponse } from '../types/responses/informplus/areas/areaidentifierbound.response'

@Route('v1/areas')
@Tags('area')
export class AreaController extends Controller {
  constructor() {
    super()
  }

  /**
   * Due to the large number of areas an empty call returns no results. Results are limited to first 500 - subsequent results can be found using the "pageNumber" attribute
   * @summary Geographical areas used by LG Inform.
   * @param applicableToMetricType Filter areas by comparison group and metric type's applicable area types
   * @param area Filter by area type and parent area
   * @param areaType All areas of a particular area type
   * @param lat Show areas for a spceified latitude and longitude (alongside lon parameter)
   * @param lon Show areas for a spceified latitude and longitude (alongside lat parameter)
   * @param pageNumber If retrieving more than 20,000 areas or 500 shapes this can be used to return subsequent pages
   * @param pageSize Number if items to be returned in each call up to a limit of 500, which is the default
   * @param searchText The search text can be either a postcode, a postcode district (the first half of the postcode), or a text string. Defaults to local authorities whether the areaType parameter is not specified
   * @returns IAreaGetResponse
   */
  @Get('/')
  @Security('apiKeyAuth')
  async getArea(
    @Query() applicableToMetricType?: string,
    @Query() area?: string,
    @Query() areaType?: string,
    @Query() lat?: string,
    @Query() lon?: string,
    @Query() pageNumber?: string,
    @Query() pageSize?: string,
    @Query() searchText?: string
  ): Promise<IAreaGetResponse> {
    let params: { [k: string]: any } = {}
    applicableToMetricType == undefined
      ? undefined
      : (params.applicableToMetricType = applicableToMetricType)
    area == undefined ? undefined : (params.area = area)
    areaType == undefined ? undefined : (params.areaType = areaType)
    lat == undefined ? undefined : (params.lat = lat)
    lon == undefined ? undefined : (params.lon = lon)
    pageNumber == undefined ? undefined : (params.pageNumber = pageNumber)
    pageSize == undefined ? undefined : (params.pageSize = pageSize)
    searchText == undefined ? undefined : (params.searchText = searchText)
    const response: IAreaGetResponse = await new AreaRepository().getArea(
      params
    )
    return response
  }

  /**
   * @summary The identifier is a GSS code, or comparison group identifier, used to find details about a particular geographical area
   * @param identifier (E09000010)
   * @returns IAreaIdentifierGetResponse
   */
  @Get('/{identifier}')
  @Security('apiKeyAuth')
  async getAreaIdentifier(
    @Path() identifier: string
  ): Promise<IAreaIdentifierGetResponse> {
    const response: IAreaIdentifierGetResponse =
      await new AreaRepository().getAreaIdentifier(identifier)
    return response
  }

  /**
   * @summary Co-ordinates for the minimum and maxim longitude and latitudes for a particular area or group of areas
   * @param identifier (E09000006)
   * @returns IAreaIdentifierBoundGetResponse
   */
  @Get('/{identifier}/bounds')
  @Security('apiKeyAuth')
  async getAreaIdentifierBounds(
    @Path() identifier: string
  ): Promise<IAreaIdentifierBoundGetResponse> {
    const response: IAreaIdentifierBoundGetResponse =
      await new AreaRepository().getAreaIdentifierBounds(identifier)

    return response
  }
}
