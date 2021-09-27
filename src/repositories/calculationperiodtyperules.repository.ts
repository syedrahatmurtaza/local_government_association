import { CalculationPeriodTypeRulesService } from '../services/informplus/calculationPeriodTypeRule.service'
import { ICalculationPeriodTypeRulesGetResponse } from '../types/responses/informPlus/calculationPeriodType/calculationPeriodTypeRule.response'

export class CalculationPeriodTypeRulesRepository {
  constructor() {}

  async getCalculationPeriodTypeRules(params: any) {
    const response =
      await new CalculationPeriodTypeRulesService().getCalculationPeriodTypeRules(
        params
      )
    return <ICalculationPeriodTypeRulesGetResponse>response.data
  }
}
