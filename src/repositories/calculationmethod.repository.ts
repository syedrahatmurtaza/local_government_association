import { CalculationMethodsService } from '../services/informplus/calculationmethods.service'
import { ICalculationMethodIdentifierGetResponse } from '../types/responses/informplus/calculationmethods/calculationmethodidentifier.response'
import { ICalculationMethodGetResponse } from '../types/responses/informplus/calculationmethods/calculationmethods.response'
import { ICalculationMethodVerboseGetResponse } from '../types/responses/informplus/calculationmethods/calculationmethodverbose.response'

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
