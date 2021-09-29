import axios, { AxiosInstance } from 'axios'
import {
  DIMENSION_MEMBERS_IDENTIFIER_TARGET_URL,
  DIMENSION_MEMBERS_TARGET_URL,
  DIMENSION_MEMBERS_VERBOSE_TARGET_URL,
} from '../../constants/api.constants'
import { ApiKeyUtil } from '../../utils/apiKey.util'

export class DimensionMembersService {
  instance: AxiosInstance
  key: string

  constructor() {
    this.instance = axios.create()
    this.key = 'ApplicationKey='
  }

  async getDimensionMembers() {
    const response = await this.instance.get(
      `${DIMENSION_MEMBERS_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getDimensionMembersVerbose() {
    const response = await this.instance.get(
      `${DIMENSION_MEMBERS_VERBOSE_TARGET_URL}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getDimensionMembersIdentifier(identifier: string) {
    const response = await this.instance.get(
      `${DIMENSION_MEMBERS_IDENTIFIER_TARGET_URL + identifier}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }
}
