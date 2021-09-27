import { ComparisonGroupTypesService } from '../services/informplus/comparisonGroupTypes.service'
import { IComparisonGroupTypesGetResponse } from '../types/responses/informPlus/comparisonGroupTypes/comparisonGroupTypes.response'
import { IComparisonGroupTypesIdentifierGetResponse } from '../types/responses/informPlus/comparisonGroupTypes/comparisonGroupTypesIdentifier.response'
import { IComparisonGroupTypesVerboseGetResponse } from '../types/responses/informPlus/comparisonGroupTypes/comparisonGroupTypesVerbose.response'

export class ComparisonGroupTypesRepository {
  constructor() {}

  async getComparisonGroupTypes(params: any) {
    const response =
      await new ComparisonGroupTypesService().getComparisonGroupTypes(params)
    return <IComparisonGroupTypesGetResponse>response.data
  }

  async getComparisonGroupTypesVerbose() {
    const response =
      await new ComparisonGroupTypesService().getComparisonGroupTypesVerbose()
    return <IComparisonGroupTypesVerboseGetResponse>response.data
  }

  async getComparisonGroupTypesIdentifier(identifier: string) {
    const response =
      await new ComparisonGroupTypesService().getComparisonGroupTypesIdentifier(
        identifier
      )
    return <IComparisonGroupTypesIdentifierGetResponse>response.data
  }
}
