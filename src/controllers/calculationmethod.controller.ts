import { Controller, Get, Path, Route, Security, Tags } from '@tsoa/runtime'
import { CalculationMethodRepository } from '../repositories/calculationMethod.repository'

import { ICalculationMethodIdentifierGetResponse } from '../types/responses/informPlus/calculationMethods/calculationMethodIdentifier.response'
import { ICalculationMethodGetResponse } from '../types/responses/informPlus/calculationMethods/calculationMethods.response'
import { ICalculationMethodVerboseGetResponse } from '../types/responses/informPlus/calculationMethods/calculationMethodVerbose.response'

@Route('v1/calculationMethods')
@Tags('calculationMethods')
export class CalculationMethodController extends Controller {
  constructor() {
    super()
  }
  /**
   * @summary Show all available calculation methods
   */
  @Get('/')
  @Security('apiKeyAuth')
  async getCalculationMethod(): Promise<ICalculationMethodGetResponse> {
    const response: ICalculationMethodGetResponse =
      await new CalculationMethodRepository().getCalculationMethods()
    return response
  }

  /**
   * @summary Show all properties of available calculation methods
   * @returns ICalculationMethodVerboseGetResponse
   */
  @Get('/verbose')
  @Security('apiKeyAuth')
  async getCalculationMethodsVerbose(): Promise<ICalculationMethodVerboseGetResponse> {
    const response: ICalculationMethodVerboseGetResponse =
      await new CalculationMethodRepository().getCalculationMethodsVerbose()
    return response
  }

  /**
   * @summary Show properties of a specified calculation methods
   * @param identifier (1)
   * @returns ICalculationMethodIdentifierGetResponse
   */
  @Get('/{identifier}')
  @Security('apiKeyAuth')
  async getCalculationMethodsIdentifier(
    @Path() identifier: number
  ): Promise<ICalculationMethodIdentifierGetResponse> {
    const response: ICalculationMethodIdentifierGetResponse =
      await new CalculationMethodRepository().getCalculationMethodsIdentifier(
        identifier
      )

    return response
  }
}
