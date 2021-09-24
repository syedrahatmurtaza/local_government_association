import { Controller, Get, Query, Route, Security, Tags } from '@tsoa/runtime'
import { CalculationPeriodTypeRulesRepository } from '../repositories/calculationperiodtyperules.repository'
import { ICalculationPeriodTypeRulesGetResponse } from '../types/responses/informplus/calculationperiodtype/calculationperiodtyperule.response'

@Route('v1/calculationPeriodTypeRules')
@Tags('calculationPeriodTypeRules')
export class CalculationPeriodTypeRulesController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Show match type for different combinations of numerator and denominator period type
   * @param denominatorPeriodType Show match type for calculations with a specific denominator
   * @param numeratorPeriodType Show match type for calculations with a specific numerator
   * @returns ICalculationPeriodTypeRulesGetResponse
   */
  @Get('/')
  @Security('apiKeyAuth')
  async getCalculationPeriodTypeRules(
    @Query() denominatorPeriodType?: string,
    @Query() numeratorPeriodType?: string
  ): Promise<ICalculationPeriodTypeRulesGetResponse> {
    let params: { [k: string]: any } = {}
    denominatorPeriodType == undefined
      ? undefined
      : (params.denominatorPeriodType = denominatorPeriodType)
    numeratorPeriodType == undefined
      ? undefined
      : (params.numeratorPeriodType = numeratorPeriodType)

    const response: ICalculationPeriodTypeRulesGetResponse =
      await new CalculationPeriodTypeRulesRepository().getCalculationPeriodTypeRules(
        params
      )
    return response
  }
}
