import axios, { AxiosInstance } from 'axios'
import { BOUND_TARGET_URL } from '../../constants/api.constants'
import { ApiKeyUtil } from '../../utils/apiKey.util'

export class BoundService {
  instance: AxiosInstance
  key: string

  constructor() {
    this.instance = axios.create()
    this.key = 'ApplicationKey='
  }

  async getBounds(params: any) {
    const response = await this.instance.get(
      `${BOUND_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`,
      {
        params: params,
      }
    )

    return response
  }
}
