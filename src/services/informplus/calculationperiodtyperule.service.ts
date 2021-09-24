import axios, { AxiosInstance } from 'axios'
import {
  BOUND_TARGET_URL,
  CALCULATION_PERIOD_TYPE_RULES_TARGET_URL,
} from '../../constants/api.constants'
import { ApiKeyUtil } from '../../utils/apikey.util'

export class CalculationPeriodTypeRulesService {
  instance: AxiosInstance
  key: string

  constructor() {
    this.instance = axios.create()
    this.key = 'ApplicationKey='
  }

  async getCalculationPeriodTypeRules(params: any) {
    const response = await this.instance.get(
      `${CALCULATION_PERIOD_TYPE_RULES_TARGET_URL}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`,
      { params: params }
    )

    return response
  }
}
