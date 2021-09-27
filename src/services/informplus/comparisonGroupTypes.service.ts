import axios, { AxiosInstance } from 'axios'

import {
  COMPARISON_GROUP_TYPES_IDENTIFIER_TARGET_URL,
  COMPARISON_GROUP_TYPES_TARGET_URL,
  COMPARISON_GROUP_TYPES_VERBOSE_TARGET_URL,
} from '../../constants/api.constants'
import { ApiKeyUtil } from '../../utils/apiKey.util'

export class ComparisonGroupTypesService {
  instance: AxiosInstance
  key: string

  constructor() {
    this.instance = axios.create()
    this.key = 'ApplicationKey='
  }

  async getComparisonGroupTypes(params: any) {
    const response = await this.instance.get(
      `${COMPARISON_GROUP_TYPES_TARGET_URL}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`,
      { params: params }
    )

    return response
  }

  async getComparisonGroupTypesVerbose() {
    const response = await this.instance.get(
      `${COMPARISON_GROUP_TYPES_VERBOSE_TARGET_URL}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getComparisonGroupTypesIdentifier(identifier: string) {
    const response = await this.instance.get(
      `${COMPARISON_GROUP_TYPES_IDENTIFIER_TARGET_URL + identifier}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }
}
