import {
  Controller,
  Get,
  Path,
  Query,
  Route,
  Security,
  Tags,
} from '@tsoa/runtime'
import { DataSetCollectionRepository } from '../repositories/dataSetCollection.repository'
import { IDataSetCollectionGetResponse } from '../types/responses/informPlus/dataSetCollection/dataSetCollection.response'
import { IDataSetCollectionIdentifierGetResponse } from '../types/responses/informPlus/dataSetCollection/dataSetCollectionIdentifier.response'
import { IDataSetCollectionVerboseGetResponse } from '../types/responses/informPlus/dataSetCollection/dataSetCollectionVerbose.response'

@Route('v1/datasetCollections')
@Tags('datasetCollections')
export class DataSetCollectionController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary The source from which the data used by any related datasets was obtained
   * @param filterOff Removes all filters on list <b>(1)</b>
   * @returns IDataSetCollectionGetResponse
   */
  @Get('/')
  @Security('apiKeyAuth')
  async getDataSetCollection(
    @Query() filterOff?: number
  ): Promise<IDataSetCollectionGetResponse> {
    let params: { [k: string]: any } = {}
    filterOff == undefined ? undefined : (params.filterOff = filterOff)
    const response: IDataSetCollectionGetResponse =
      await new DataSetCollectionRepository().getDataSetCollection(params)
    return response
  }

  /**
   * @summary Full details of all sources used by datasets
   * @returns IDataSetCollectionVerboseGetResponse
   */
  @Get('/verbose')
  @Security('apiKeyAuth')
  async getDataSetCollectionVerbose(): Promise<IDataSetCollectionVerboseGetResponse> {
    const response: IDataSetCollectionVerboseGetResponse =
      await new DataSetCollectionRepository().getDataSetCollectionVerbose()
    return response
  }

  /**
   * @summary Full details of a particular source, using its identifier
   * @param identifier (145)
   * @returns IDataSetCollectionIdentifierGetResponse
   */
  @Get('/{identifier}')
  @Security('apiKeyAuth')
  async getDataSetCollectionIdentifier(
    @Path() identifier: number
  ): Promise<IDataSetCollectionIdentifierGetResponse> {
    const response: IDataSetCollectionIdentifierGetResponse =
      await new DataSetCollectionRepository().getDataSetCollectionIdentifier(
        identifier
      )

    return response
  }
}
