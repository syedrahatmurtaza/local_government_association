import { CalculationMethodsService } from '../services/informplus/calculationMethods.service'
import { ICalculationMethodIdentifierGetResponse } from '../types/responses/informPlus/calculationMethods/calculationMethodIdentifier.response'
import { ICalculationMethodGetResponse } from '../types/responses/informPlus/calculationMethods/calculationMethods.response'
import { ICalculationMethodVerboseGetResponse } from '../types/responses/informPlus/calculationMethods/calculationMethodVerbose.response'

export class CalculationMethodRepository {
  constructor() {}

  async getCalculationMethods() {
    const response =
      await new CalculationMethodsService().getCalculationMethods()
    return <ICalculationMethodGetResponse>response.data
  }

  async getCalculationMethodsVerbose() {
    const response =
      await new CalculationMethodsService().getCalculationMethodsVerbose()
    return <ICalculationMethodVerboseGetResponse>response.data
  }

  async getCalculationMethodsIdentifier(identifier: number) {
    const response =
      await new CalculationMethodsService().getCalculationMethodsIdentifier(
        identifier
      )
    return <ICalculationMethodIdentifierGetResponse>response.data
  }
}
