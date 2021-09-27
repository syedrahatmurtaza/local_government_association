import axios, { AxiosInstance } from 'axios'

import {
  COMPARISON_GROUP_CURRENT_TARGET_URL,
  COMPARISON_GROUP_IDENTIFIER_BOUNDS_TARGET_PATH,
  COMPARISON_GROUP_IDENTIFIER_TARGET_URL,
  COMPARISON_GROUP_TARGET_URL,
} from '../../constants/api.constants'
import { ApiKeyUtil } from '../../utils/apiKey.util'

export class ComparisonGroupsService {
  instance: AxiosInstance
  key: string

  constructor() {
    this.instance = axios.create()
    this.key = 'ApplicationKey='
  }

  async getComparisonGroup(params: any) {
    const response = await this.instance.get(
      `${COMPARISON_GROUP_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`,
      { params: params }
    )

    return response
  }

  async getComparisonGroupCurrent(params: any) {
    const response = await this.instance.get(
      `${COMPARISON_GROUP_CURRENT_TARGET_URL}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`,
      { params: params }
    )

    return response
  }

  async getComparisonGroupIdentifier(identifier: string) {
    const response = await this.instance.get(
      `${COMPARISON_GROUP_IDENTIFIER_TARGET_URL + identifier}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getComparisonGroupIdentifierBounds(identifier: string) {
    const response = await this.instance.get(
      `${
        COMPARISON_GROUP_IDENTIFIER_TARGET_URL +
        identifier +
        COMPARISON_GROUP_IDENTIFIER_BOUNDS_TARGET_PATH
      }?${this.key}${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }
}
