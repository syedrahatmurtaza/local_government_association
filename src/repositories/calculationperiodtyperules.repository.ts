import { CalculationPeriodTypeRulesService } from '../services/informplus/calculationperiodtyperule.service'
import { ICalculationPeriodTypeRulesGetResponse } from '../types/responses/informplus/calculationperiodtype/calculationperiodtyperule.response'

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
