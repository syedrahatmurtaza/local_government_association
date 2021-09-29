import axios, { AxiosInstance } from 'axios'
import { MARKER_GROUP_TARGET_URL } from '../../constants/api.constants'
import { ApiKeyUtil } from '../../utils/apiKey.util'

export class MarkerGroupsService {
  instance: AxiosInstance
  key: string

  constructor() {
    this.instance = axios.create()
    this.key = 'ApplicationKey='
  }

  async getMarkerGroups(params: any) {
    const response = await this.instance.get(
      `${MARKER_GROUP_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`,
      {
        params: params,
      }
    )

    return response
  }
}
