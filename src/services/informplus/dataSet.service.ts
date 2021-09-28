import axios, { AxiosInstance } from 'axios'

import {
  DATA_SET_IDENTIFIER_TARGET_URL,
  DATA_SET_TARGET_URL,
  DATA_SET_VERBOSE_TARGET_URL,
} from '../../constants/api.constants'
import { ApiKeyUtil } from '../../utils/apiKey.util'

export class DataSetService {
  instance: AxiosInstance
  key: string

  constructor() {
    this.instance = axios.create()
    this.key = 'ApplicationKey='
  }

  async getDataSet() {
    const response = await this.instance.get(
      `${DATA_SET_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getDataSetVerbose() {
    const response = await this.instance.get(
      `${DATA_SET_VERBOSE_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getDataSetIdentifier(identifier: number) {
    const response = await this.instance.get(
      `${DATA_SET_IDENTIFIER_TARGET_URL + identifier}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }
}
