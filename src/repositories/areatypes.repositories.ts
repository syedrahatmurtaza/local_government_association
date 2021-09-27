import { AreaTypesService } from '../services/informplus/areaTypes.service'
import { IAreaTypeIdentifierGetResponse } from '../types/responses/informPlus/areaTypeIdentifier.response'
import { IAreaTypeGetResponse } from '../types/responses/informPlus/areaTypes.response'
import { IAreaTypeCurrentGetResponse } from '../types/responses/informPlus/areaTypesCurrent.response'
import { IAreaTypeFilterDataGetResponse } from '../types/responses/informPlus/areatypesFilterData.response'
import { IAreaTypeVerboseGetResponse } from '../types/responses/informPlus/areaTypesVerbose.response'

export class AreaTypesRepository {
  constructor() {}

  async getAreaTypes(params: any): Promise<IAreaTypeGetResponse> {
    const response = await new AreaTypesService().getAreaTypes(params)

    return <IAreaTypeGetResponse>response.data
  }

  async getAreaTypesCurrent(): Promise<IAreaTypeCurrentGetResponse> {
    const response = await new AreaTypesService().getAreaTypesCurrent()

    return <IAreaTypeCurrentGetResponse>response.data
  }

  async getAreaTypesFilterData(
    params: any
  ): Promise<IAreaTypeFilterDataGetResponse> {
    const response = await new AreaTypesService().getAreaTypesFilterData(params)

    return <IAreaTypeFilterDataGetResponse>response.data
  }

  async getAreaTypesVerbose(params: any): Promise<IAreaTypeVerboseGetResponse> {
    const response = await new AreaTypesService().getAreaTypesVerbose(params)

    return <IAreaTypeVerboseGetResponse>response.data
  }

  async getAreaTypesWithIdentifier(identifer: string) {
    const response = await new AreaTypesService().getAreaTypesWithIdentifier(
      identifer
    )

    return <IAreaTypeIdentifierGetResponse>response.data
  }
}
