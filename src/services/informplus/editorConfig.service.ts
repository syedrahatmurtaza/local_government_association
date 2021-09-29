import axios, { AxiosInstance } from 'axios'
import {
  EDITOR_CONFIG_TARGET_URL,
  EDITOR_FIELD_TARGET_URL,
  EDITOR_FUNCTIONS_TARGET_URL,
} from '../../constants/api.constants'
import { ApiKeyUtil } from '../../utils/apiKey.util'

export class EditorConfigService {
  instance: AxiosInstance
  key: string

  constructor() {
    this.instance = axios.create()
    this.key = 'ApplicationKey='
  }

  async getEditorConfig(params: any) {
    const response = await this.instance.get(
      `${EDITOR_CONFIG_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`,
      {
        params: params,
      }
    )

    return response
  }

  async getEditorField(params: any) {
    const response = await this.instance.get(
      `${EDITOR_FIELD_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`,
      {
        params: params,
      }
    )

    return response
  }

  async getEditorFunction(params: any) {
    const response = await this.instance.get(
      `${EDITOR_FUNCTIONS_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`,
      {
        params: params,
      }
    )

    return response
  }
}
