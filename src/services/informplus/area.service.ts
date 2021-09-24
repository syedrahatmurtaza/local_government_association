import axios, { AxiosInstance } from 'axios'
import {
  AREA_IDENTIFIER_BOUNDS_TARGET_URL,
  AREA_IDENTIFIER_TARGET_URL,
  AREA_TARGET_URL,
  AREA_TYPES_CURRENT_TARGET_URL,
  AREA_TYPES_FILTER_DATA_TARGET_URL,
  AREA_TYPES_IDENTIFER_TARGET_URL,
  AREA_TYPES_TARGET_URL,
  AREA_TYPES_VERBOSE_TARGET_URL,
  SUB_BOUND_TARGET_URL,
} from '../../constants/api.constants'
import { ApiKeyUtil } from '../../utils/apikey.util'

export class AreaService {
  instance: AxiosInstance
  key: string
  public static KEY_VALUE: string

  constructor() {
    this.instance = axios.create()
    this.key = 'ApplicationKey='
  }

  static getKeyValue() {
    return this.KEY_VALUE
  }

  static setKeyValue(value: string) {
    this.KEY_VALUE = value
  }

  async getArea(params: any) {
    const response = await this.instance.get(
      `${AREA_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`,
      {
        params: params,
      }
    )

    return response
  }

  async getAreaIdentifier(identifier: string) {
    const response = await this.instance.get(
      `${AREA_IDENTIFIER_TARGET_URL}${identifier}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getAreaIdentifierBounds(identifier: string) {
    const response = await this.instance.get(
      `${
        AREA_IDENTIFIER_BOUNDS_TARGET_URL + identifier + SUB_BOUND_TARGET_URL
      }?${this.key}${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }
}
