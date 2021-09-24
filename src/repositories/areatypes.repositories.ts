import { AreaTypesService } from '../services/informplus/areatypes.service'
import { IAreaTypeIdentifierGetResponse } from '../types/responses/informplus/areatypeidentifier.response'
import { IAreaTypeGetResponse } from '../types/responses/informplus/areatypes.response'
import { IAreaTypeCurrentGetResponse } from '../types/responses/informplus/areatypescurrent.response'
import { IAreaTypeFilterDataGetResponse } from '../types/responses/informplus/areatypesfilterdata.response'
import { IAreaTypeVerboseGetResponse } from '../types/responses/informplus/areatypesverbose.response'

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
