import { Controller, Get, Path, Route, Security, Tags } from '@tsoa/runtime'
import { DataSetRepository } from '../repositories/dataSet.repository'
import { IDataSetGetResponse } from '../types/responses/informPlus/dataSet/dataSet.response'
import { IDataSetIdentifierGetResponse } from '../types/responses/informPlus/dataSet/dataSetIdentifier.response'
import { IDataSetVerboseGetResponse } from '../types/responses/informPlus/dataSet/dataSetVerbose.response'

@Route('v1/datasets')
@Tags('datasets')
export class DataSetController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Returns a list of datasets. Only basic details are provided including identifier, label and some others
   * @returns IDataSetGetResponse
   */
  @Get('/')
  @Security('apiKeyAuth')
  async getDataSet(): Promise<IDataSetGetResponse> {
    const response: IDataSetGetResponse =
      await new DataSetRepository().getDataSet()
    return response
  }

  /**
   * @summary Full details of all datasets
   * @returns IDataSetVerboseGetResponse
   */
  @Get('/verbose')
  @Security('apiKeyAuth')
  async getDataSetVerbose(): Promise<IDataSetVerboseGetResponse> {
    const response: IDataSetVerboseGetResponse =
      await new DataSetRepository().getDataSetVerbose()
    return response
  }

  /**
   * @summary Details about a particular dataset, using its identifier
   * @returns IDataSetIdentifierGetResponse
   * @param identifier (102)
   */
  @Get('/{identifier}')
  @Security('apiKeyAuth')
  async getDataSetIdentifier(
    @Path() identifier: number
  ): Promise<IDataSetIdentifierGetResponse> {
    const response: IDataSetIdentifierGetResponse =
      await new DataSetRepository().getDataSetIdentifier(identifier)
    return response
  }
}
