import axios, { AxiosInstance } from 'axios'
import {
  BOUND_TARGET_URL,
  CALCULATION_PERIOD_TYPE_RULES_TARGET_URL,
  CLIENT_APPLICATION_IDENTIFIER_TARGET_URL,
  CLIENT_APPLICATION_TARGET_URL,
  CLIENT_APPLICATION_VERBOSE_TARGET_URL,
} from '../../constants/api.constants'
import { ApiKeyUtil } from '../../utils/apikey.util'

export class ClientApplicationService {
  instance: AxiosInstance
  key: string

  constructor() {
    this.instance = axios.create()
    this.key = 'ApplicationKey='
  }

  async getClientApplication() {
    const response = await this.instance.get(
      `${CLIENT_APPLICATION_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getClientApplicationVerbose() {
    const response = await this.instance.get(
      `${CLIENT_APPLICATION_VERBOSE_TARGET_URL}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getClientApplicationIdentifier(identifier: string) {
    const response = await this.instance.get(
      `${CLIENT_APPLICATION_IDENTIFIER_TARGET_URL + identifier}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }
}
