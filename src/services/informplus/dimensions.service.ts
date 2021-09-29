import axios, { AxiosInstance } from 'axios'
import {
  DIMENSIONS_IDENTIFIER_TARGET_URL,
  DIMENSIONS_TARGET_URL,
  DIMENSIONS_VERBOSE_TARGET_URL,
} from '../../constants/api.constants'
import { ApiKeyUtil } from '../../utils/apiKey.util'

export class DimensionsService {
  instance: AxiosInstance
  key: string

  constructor() {
    this.instance = axios.create()
    this.key = 'ApplicationKey='
  }

  async getDimensions() {
    const response = await this.instance.get(
      `${DIMENSIONS_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getDimensionsVerbose() {
    const response = await this.instance.get(
      `${DIMENSIONS_VERBOSE_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getDimensionsIdentifier(identifier: string) {
    const response = await this.instance.get(
      `${DIMENSIONS_IDENTIFIER_TARGET_URL + identifier}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }
}
