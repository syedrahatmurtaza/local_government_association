import axios, { AxiosInstance } from 'axios'

import {
  DATA_SET_COLLECTION_IDENTIFIER_TARGET_URL,
  DATA_SET_COLLECTION_TARGET_URL,
  DATA_SET_COLLECTION_VERBOSE_TARGET_URL,
} from '../../constants/api.constants'
import { ApiKeyUtil } from '../../utils/apiKey.util'

export class DataSetCollectionService {
  instance: AxiosInstance
  key: string

  constructor() {
    this.instance = axios.create()
    this.key = 'ApplicationKey='
  }

  async getDataSetCollection(params: any) {
    const response = await this.instance.get(
      `${DATA_SET_COLLECTION_TARGET_URL}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`,
      { params: params }
    )

    return response
  }

  async getDataSetCollectionVerbose() {
    const response = await this.instance.get(
      `${DATA_SET_COLLECTION_VERBOSE_TARGET_URL}${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getDataSetCollectionIdentifier(identifier: number) {
    const response = await this.instance.get(
      `${DATA_SET_COLLECTION_IDENTIFIER_TARGET_URL + identifier}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }
}
