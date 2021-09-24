import axios, { AxiosInstance } from 'axios'
import {
  AREA_TYPES_CURRENT_TARGET_URL,
  AREA_TYPES_FILTER_DATA_TARGET_URL,
  AREA_TYPES_IDENTIFER_TARGET_URL,
  AREA_TYPES_TARGET_URL,
  AREA_TYPES_VERBOSE_TARGET_URL,
} from '../../constants/api.constants'
import { ApiKeyUtil } from '../../utils/apikey.util'

export class AreaTypesService {
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

  async getAreaTypes(params: any) {
    const response = await this.instance.get(
      `${AREA_TYPES_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`,
      {
        params: params,
      }
    )

    return response
  }

  async getAreaTypesCurrent() {
    const response = await this.instance.get(
      `${AREA_TYPES_CURRENT_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getAreaTypesFilterData(params: any) {
    const response = await this.instance.get(
      `${AREA_TYPES_FILTER_DATA_TARGET_URL}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`,
      {
        params: params,
      }
    )

    return response
  }

  async getAreaTypesVerbose(params: any) {
    const response = await this.instance.get(
      `${AREA_TYPES_VERBOSE_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`,
      {
        params: params,
      }
    )

    return response
  }

  async getAreaTypesWithIdentifier(identifer: string) {
    const response = await this.instance.get(
      `${AREA_TYPES_IDENTIFER_TARGET_URL}/${identifer}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }
}
