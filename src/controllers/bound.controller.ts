import { Controller, Get, Query, Route, Security, Tags } from '@tsoa/runtime'
import { BoundRepository } from '../repositories/bound.repository'
import { IBoundsGetResponse } from '../types/responses/informplus/bounds/bound.response'

@Route('v1/bounds')
@Tags('bounds')
export class BoundController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Co-ordinates for the minimum and maxim longitude and latitudes for a particular area or group of areas
   * @param area Returns the minimum and maximum longitudes for an area or group of areas
   * @returns IBoundsGetResponse
   */
  @Get('/')
  @Security('apiKeyAuth')
  async getBounds(@Query() area: string): Promise<IBoundsGetResponse> {
    let params: { [k: string]: any } = {}
    area == undefined ? undefined : (params.area = area)
    const response: IBoundsGetResponse = await new BoundRepository().getBounds(
      params
    )
    return response
  }
}
