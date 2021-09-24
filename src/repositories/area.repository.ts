import { response } from 'express'
import { AreaService } from '../services/informplus/area.service'
import { IAreaGetResponse } from '../types/responses/informplus/area/area.response'
import { IAreaIdentifierGetResponse } from '../types/responses/informplus/area/areaidentifier.response'
import { IAreaIdentifierBoundGetResponse } from '../types/responses/informplus/area/areaidentifierbound.response'

export class AreaRepository {
  constructor() {}

  async getArea(params: any) {
    const response = await new AreaService().getArea(params)
    return <IAreaGetResponse>response.data
  }

  async getAreaIdentifier(identifier: string) {
    const response = await new AreaService().getAreaIdentifier(identifier)
    return <IAreaIdentifierGetResponse>response.data
  }

  async getAreaIdentifierBounds(identifier: string) {
    const response = await new AreaService().getAreaIdentifierBounds(identifier)
    return <IAreaIdentifierBoundGetResponse>response.data
  }
}
