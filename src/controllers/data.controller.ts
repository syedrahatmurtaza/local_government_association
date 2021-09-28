import {
  Controller,
  Get,
  Header,
  Query,
  Route,
  Security,
  Tags,
} from '@tsoa/runtime'
import { DataRepository } from '../repositories/data.repository'
import { IDataGetResponse } from '../types/responses/informPlus/datas/data.response'
import { IDataRegressionGetResponse } from '../types/responses/informPlus/datas/dataRegression.response'
import { IDataTableGetResponse } from '../types/responses/informPlus/datas/dataTable.response'

@Route('v1/data')
@Tags('data')
export class DataController extends Controller {
  constructor() {
    super()
  }

  /**
   * Note that when the denominator metric type uses a different period type from the numerator. The first denominator period that has a "end date" less than the chosen numerator period is used with the denominator metric type
   * @summary Returns table or values to populate a user specified table component. At minimum, 'area', 'metricType' and 'period' parameters are required
   * @param metricType
   * @param period The time period that is to be returned. To just retrieve data for the latest available period, use "latest". For the most recent two time periods, use "latest:2", and so on. Otherwise one or more time period identifiers can be used
   * @param area The area or comparison group that the data values are for
   * @param columnGrouping Specify how the results will be grouped when viewed in a tabular format
   * @param headerCellType Whether the header cells should be labels or identifiers
   * @param includeMissing If this is set to true, areas which do not have values will be included in the results
   * @param outputType Format for which the data will be used. For example table or pie
   * @param rowGrouping Specify how the results will be grouped when viewed in a tabular format
   * @param summary Use summaryType to define the type of summary and what will be summarised. Example summary types are sum, min and max
   * @param valueType The type of value that is returned for each query is defined by the valueType parameter, examples are raw, rank and band
   * @returns IDataGetResponse
   */
  @Get('/')
  @Security('apiKeyAuth')
  async getData(
    @Query() metricType: string,
    @Query() period: string,
    @Query() area: string,
    @Query() columnGrouping?: string,
    @Query() headerCellType?: string,
    @Query() includeMissing?: string,
    @Query() outputType?: string,
    @Query() rowGrouping?: string,
    @Query() summary?: string,
    @Query() valueType?: string
  ): Promise<IDataGetResponse> {
    let params: { [k: string]: any } = {}
    metricType == undefined ? undefined : (params.metricType = metricType)
    period == undefined ? undefined : (params.period = period)
    area == undefined ? undefined : (params.area = area)
    columnGrouping == undefined
      ? undefined
      : (params.columnGrouping = columnGrouping)
    headerCellType == undefined
      ? undefined
      : (params.headerCellType = headerCellType)
    includeMissing == undefined
      ? undefined
      : (params.includeMissing = includeMissing)
    outputType == undefined ? undefined : (params.outputType = outputType)
    rowGrouping == undefined ? undefined : (params.rowGrouping = rowGrouping)
    summary == undefined ? undefined : (params.summary = summary)
    valueType == undefined ? undefined : (params.valueType = valueType)
    const resposne: IDataGetResponse = await new DataRepository().getData(
      params
    )
    return resposne
  }

  /**
   * @summary Returns table or values to populate a user specified table component and includes a regression x1, y1, x2, y2 coordinate for the regression line between each pair of columns. As with /data, at minimum 'area', 'metricType' and 'period' are required. The regression values appear at the end of the data results
   * @param metricType
   * @param period The time period that is to be returned. To just retrieve data for the latest available period, use "latest". For the most recent two time periods, use "latest:2", and so on. Otherwise one or more time period identifiers can be used
   * @param area The area or comparison group that the data values are for
   * @param columnGrouping Specify how the results will be grouped when viewed in a tabular format
   * @param headerCellType Whether the header cells should be labels or identifiers
   * @param includeMissing If this is set to true, areas which do not have values will be included in the results
   * @param outputType Format for which the data will be used. For example table or pie
   * @param rowGrouping Specify how the results will be grouped when viewed in a tabular format
   * @param summary Use summaryType to define the type of summary and what will be summarised. Example summary types are sum, min and max
   * @param valueType The type of value that is returned for each query is defined by the valueType parameter, examples are raw, rank and band
   * @returns IDataRegressionGetResponse
   */
  @Get('/regression')
  @Security('apiKeyAuth')
  async getDataRegression(
    @Query() metricType: string,
    @Query() period: string,
    @Query() area: string,
    @Query() columnGrouping?: string,
    @Query() headerCellType?: string,
    @Query() includeMissing?: string,
    @Query() outputType?: string,
    @Query() rowGrouping?: string,
    @Query() summary?: string,
    @Query() valueType?: string
  ): Promise<IDataRegressionGetResponse> {
    let params: { [k: string]: any } = {}
    metricType == undefined ? undefined : (params.metricType = metricType)
    period == undefined ? undefined : (params.period = period)
    area == undefined ? undefined : (params.area = area)
    columnGrouping == undefined
      ? undefined
      : (params.columnGrouping = columnGrouping)
    headerCellType == undefined
      ? undefined
      : (params.headerCellType = headerCellType)
    includeMissing == undefined
      ? undefined
      : (params.includeMissing = includeMissing)
    outputType == undefined ? undefined : (params.outputType = outputType)
    rowGrouping == undefined ? undefined : (params.rowGrouping = rowGrouping)
    summary == undefined ? undefined : (params.summary = summary)
    valueType == undefined ? undefined : (params.valueType = valueType)
    const response: IDataRegressionGetResponse =
      await new DataRepository().getDataRegression(params)
    return response
  }

  /**
   * @summary Returns data method results in JSON table format with a different row for each parameter. This accepts the same parameters as the /data method
   * @param area The area or comparison group that the data values are for
   * @param period The time period that is to be returned. To just retrieve data for the latest available period, use "latest". For the most recent two time periods, use "latest:2", and so on. Otherwise one or more time period identifiers can be used
   * @param metricType The metric type the data value is for
   * @returns IDataTableGetResponse
   */
  @Get('/data.table')
  @Security('apiKeyAuth')
  async getDataTable(
    @Query() area: string,
    @Query() period: string,
    @Query() metricType: string
  ): Promise<IDataTableGetResponse[]> {
    let params: { [k: string]: any } = {}
    area == undefined ? undefined : (params.area = area)
    period == undefined ? undefined : (params.period = period)
    metricType == undefined ? undefined : (params.metricType = metricType)
    const response: IDataTableGetResponse[] =
      await new DataRepository().getDataTable(params)
    return response
  }
}
