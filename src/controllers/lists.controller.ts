import {
  Controller,
  Get,
  Path,
  Query,
  Route,
  Security,
  Tags,
} from '@tsoa/runtime'
import { ListsRepository } from '../repositories/lists.repository'
import { IListByIDGetResponse } from '../types/responses/informPlus/lists/listById.response'
import { IListByIDVerboseGetResponse } from '../types/responses/informPlus/lists/listByIdVerbose.responst'
import { IListIdenfitierGetResponse } from '../types/responses/informPlus/lists/listIdentifier.response'
import { IListGetResponse } from '../types/responses/informPlus/lists/lists.response'
import { IListTagGetResponse } from '../types/responses/informPlus/lists/listTag.response'

@Route('v1/lists')
@Tags('lists')
export class ListController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Gives properties of lists and list subsets available through LG Inform Plus standards
   * @returns  IListGetResponse
   */
  @Get('/')
  @Security('apiKeyAuth')
  async getList(): Promise<IListGetResponse> {
    const response: IListGetResponse = await new ListsRepository().getList()
    return response
  }

  /**
   * @summary Gives properties of lists and list subsets available through LG Inform Plus standards
   * @param tag Filter the list items by the specified tag
   * @returns  IListGetResponse
   */
  @Get('/areas')
  @Security('apiKeyAuth')
  async getListByTag(@Query() tag: string): Promise<IListTagGetResponse> {
    let params: { [k: string]: any } = {}
    tag == undefined ? undefined : (params.tag = tag)
    const response: IListTagGetResponse =
      await new ListsRepository().getListByTag(params)
    return response
  }

  /**
   * @summary Gives full properties of a single list and lists all its items
   * @param listId (az)
   * @returns  IListByIDGetResponse
   */
  @Get('/{listId}')
  @Security('apiKeyAuth')
  async getListById(@Path() listId: string): Promise<IListByIDGetResponse> {
    const response: IListByIDGetResponse =
      await new ListsRepository().getListByListId(listId)
    return response
  }

  /**
   * @summary Full details of the given list and all its items, including mappings
   * @param listId (organisationTypes)
   * @returns  IListByIDVerboseGetResponse
   */
  @Get('/{listId}/verbose')
  @Security('apiKeyAuth')
  async getListByIdVerbose(
    @Path() listId: string
  ): Promise<IListByIDVerboseGetResponse> {
    const response: IListByIDVerboseGetResponse =
      await new ListsRepository().getListByListIdVerbose(listId)
    return response
  }

  /**
   * @summary Gives full properties of a single list item
   * @param listId (az)
   * @param identifier (A50987)
   * @returns  IListIdenfitierGetResponse
   */
  @Get('/{listId}/{identifier}')
  @Security('apiKeyAuth')
  async getListByListIdenfitier(
    @Path() listId: string,
    @Path() identifier: string
  ): Promise<IListIdenfitierGetResponse> {
    const response: IListIdenfitierGetResponse =
      await new ListsRepository().getListByListIdenfitier(listId, identifier)
    return response
  }
}
