import axios, { AxiosInstance } from 'axios'
import {
  CALCULATION_METHODS_IDENTIFIER_TARGET_URL,
  CALCULATION_METHODS_TARGET_URL,
  CALCULATION_METHODS_VERBOSE_TARGET_URL,
} from '../../constants/api.constants'
import { ApiKeyUtil } from '../../utils/apiKey.util'

export class CalculationMethodsService {
  instance: AxiosInstance
  key: string

  constructor() {
    this.instance = axios.create()
    this.key = 'ApplicationKey='
  }

  async getCalculationMethods() {
    const response = await this.instance.get(
      `${CALCULATION_METHODS_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getCalculationMethodsVerbose() {
    const response = await this.instance.get(
      `${CALCULATION_METHODS_VERBOSE_TARGET_URL}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getCalculationMethodsIdentifier(identifier: number) {
    const response = await this.instance.get(
      `${CALCULATION_METHODS_IDENTIFIER_TARGET_URL + identifier}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }
}
