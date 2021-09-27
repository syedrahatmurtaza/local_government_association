import { BoundService } from '../services/informplus/bound.service'
import { IBoundsGetResponse } from '../types/responses/informPlus/bounds/bound.response'

export class BoundRepository {
  constructor() {}

  async getBounds(params: any) {
    const response = await new BoundService().getBounds(params)
    return <IBoundsGetResponse>response.data
  }
}
