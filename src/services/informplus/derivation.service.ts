import axios, { AxiosInstance } from 'axios'
import { DERIVATION_TARGET_URL } from '../../constants/api.constants'
import { ApiKeyUtil } from '../../utils/apiKey.util'

export class DerivationService {
  instance: AxiosInstance
  key: string

  constructor() {
    this.instance = axios.create()
    this.key = 'ApplicationKey='
  }

  async getDerivation(params: any) {
    const response = await this.instance.get(
      `${DERIVATION_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`,
      {
        params: params,
      }
    )

    return response
  }
}
