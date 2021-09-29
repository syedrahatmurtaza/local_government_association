import { ListsService } from '../services/informplus/lists.service'
import { IListByIDGetResponse } from '../types/responses/informPlus/lists/listById.response'
import { IListByIDVerboseGetResponse } from '../types/responses/informPlus/lists/listByIdVerbose.responst'
import { IListIdenfitierGetResponse } from '../types/responses/informPlus/lists/listIdentifier.response'
import { IListGetResponse } from '../types/responses/informPlus/lists/lists.response'
import { IListTagGetResponse } from '../types/responses/informPlus/lists/listTag.response'

export class ListsRepository {
  constructor() {}

  async getList() {
    const response = await new ListsService().getList()
    return <IListGetResponse>response.data
  }

  async getListByTag(params: any) {
    const response = await new ListsService().getListByTag(params)
    return <IListTagGetResponse>response.data
  }

  async getListByListId(listId: string) {
    const response = await new ListsService().getListByListId(listId)
    return <IListByIDGetResponse>response.data
  }

  async getListByListIdVerbose(listId: string) {
    const response = await new ListsService().getListByListIdVerbose(listId)
    return <IListByIDVerboseGetResponse>response.data
  }

  async getListByListIdenfitier(listId: string, identifier: string) {
    const response = await new ListsService().getListByListIdenfitier(
      listId,
      identifier
    )
    return <IListIdenfitierGetResponse>response.data
  }
}
