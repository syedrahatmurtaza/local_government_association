import { DimensionsService } from '../services/informplus/dimensions.service'
import { IDimensionsGetResponse } from '../types/responses/informPlus/dimensions/dimension.response'
import { IDimensionsIdentifierGetResponse } from '../types/responses/informPlus/dimensions/dimensionIdentifier.response'
import { IDimensionsVerboseGetResponse } from '../types/responses/informPlus/dimensions/dimensionVerbose.response'

export class DimensionsRepository {
  constructor() {}

  async getDimensions() {
    const response = await new DimensionsService().getDimensions()
    return <IDimensionsGetResponse>response.data
  }

  async getDimensionsVerbose() {
    const response = await new DimensionsService().getDimensionsVerbose()
    return <IDimensionsVerboseGetResponse>response.data
  }

  async getDimensionsIdentifier(identifier: string) {
    const response = await new DimensionsService().getDimensionsIdentifier(
      identifier
    )
    return <IDimensionsIdentifierGetResponse>response.data
  }
}
