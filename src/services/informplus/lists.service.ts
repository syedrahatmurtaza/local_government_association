import axios, { AxiosInstance } from 'axios'
import {
  LISTS_IDENTIFIER_TARGET_URL,
  LISTS_LISTID_TARGET_URL,
  LISTS_LISTID_VERBOSE_PATH,
  LISTS_TAG_TARGET_URL,
  LISTS_TARGET_URL,
} from '../../constants/api.constants'
import { ApiKeyUtil } from '../../utils/apiKey.util'

export class ListsService {
  instance: AxiosInstance
  key: string

  constructor() {
    this.instance = axios.create()
    this.key = 'ApplicationKey='
  }

  async getList() {
    const response = await this.instance.get(
      `${LISTS_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getListByTag(params: any) {
    const response = await this.instance.get(
      `${LISTS_TAG_TARGET_URL}?${this.key}${ApiKeyUtil.getKeyValue()}`,
      { params: params }
    )

    return response
  }

  async getListByListId(listId: string) {
    const response = await this.instance.get(
      `${LISTS_LISTID_TARGET_URL + listId}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getListByListIdVerbose(listId: string) {
    console.log(LISTS_LISTID_TARGET_URL + listId + LISTS_LISTID_VERBOSE_PATH)
    const response = await this.instance.get(
      `${LISTS_LISTID_TARGET_URL + listId + LISTS_LISTID_VERBOSE_PATH}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }

  async getListByListIdenfitier(listId: string, identifier: string) {
    console.log(LISTS_LISTID_TARGET_URL + listId + LISTS_LISTID_VERBOSE_PATH)
    const response = await this.instance.get(
      `${LISTS_IDENTIFIER_TARGET_URL + listId + '/' + identifier}?${
        this.key
      }${ApiKeyUtil.getKeyValue()}`
    )

    return response
  }
}
