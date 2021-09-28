import axios, { AxiosInstance } from 'axios'
import {
  DATA_REGRESSION_TARGET_URL,
  DATA_TABLE_TARGET_URL,
  DATA_TARGET_URL,
} from '../../constants/api.constants'
import { ApiKeyUtil } from '../../utils/apiKey.util'

export class DataService {
  instance: AxiosInstance
  key: string

  constructor() {
    this.instance = axios.create()
    this.key = 'ApplicationKey='
  }

  async getData(params: any) {
    const response = await this.instance.get(
      `${DATA_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`,
      { params: params }
    )

    return response
  }

  async getDataRegression(params: any) {
    const response = await this.instance.get(
      `${DATA_REGRESSION_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`,
      { params: params }
    )

    return response
  }

  async getDataTable(params: any) {
    const response = await this.instance.get(
      `${DATA_TABLE_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`,
      { params: params }
    )

    return response
  }
}
