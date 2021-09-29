import { Controller, Get, Query, Route, Security } from '@tsoa/runtime'
import { EditorConfigRepository } from '../repositories/editorConfig.repository'
import { IEditorConfigGetResponse } from '../types/responses/informPlus/editor/config.response'
import { IEditorFieldsGetResponse } from '../types/responses/informPlus/editor/field.response'
import { IEditorFunctionGetResponse } from '../types/responses/informPlus/editor/function.response'

@Route('v1/editor')
export class EditorConfigController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Default configuration for the text token editor
   * @param area Default text token editor settings for a particular area
   * @param areaTypeMax Specify highest level area type to show in hierarchy
   * @param authorityArea Set the authority area in the default text token editor settings
   * @param childArea Set the child area in the default text token editor settings
   * @param comparisonGroup Specify comparison group
   * @param includeChildArea Toggle whether to include child areas in hierarchy
   * @param latestPeriod Set default period identifier
   * @param metricDimension Set default metric dimension
   * @param metricType Set default metric type
   * @returns IEditorConfigGetResponse
   */
  @Get('/config')
  @Security('apiKeyAuth')
  async getEditorConfig(
    @Query() area?: string,
    @Query() areaTypeMax?: string,
    @Query() authorityArea?: string,
    @Query() childArea?: string,
    @Query() comparisonGroup?: string,
    @Query() includeChildArea?: string,
    @Query() latestPeriod?: string,
    @Query() metricDimension?: string,
    @Query() metricType?: string
  ): Promise<IEditorConfigGetResponse> {
    let params: { [k: string]: any } = {}
    area == undefined ? undefined : (params.area = area)
    areaTypeMax == undefined ? undefined : (params.areaTypeMax = areaTypeMax)
    authorityArea == undefined
      ? undefined
      : (params.authorityArea = authorityArea)
    childArea == undefined ? undefined : (params.childArea = childArea)
    comparisonGroup == undefined
      ? undefined
      : (params.comparisonGroup = comparisonGroup)
    includeChildArea == undefined
      ? undefined
      : (params.includeChildArea = includeChildArea)
    latestPeriod == undefined ? undefined : (params.latestPeriod = latestPeriod)
    metricDimension == undefined
      ? undefined
      : (params.metricDimension = metricDimension)
    metricType == undefined ? undefined : (params.metricType = metricType)
    const response: IEditorConfigGetResponse =
      await new EditorConfigRepository().getEditorConfig(params)
    return response
  }

  /**
   * @summary List of fields and their default labels
   * @param area Default field labels in the text token editor for a particular area
   * @param areaTypeMax Specify highest level area type to show in hierarchy
   * @param authorityArea Default field labels in the text token editor for a particular authority area
   * @param childArea Default field labels in the text token editor for a particular child area
   * @param comparisonGroup Specify comparison group
   * @param includeChildArea Toggle whether to include child areas in hierarchy
   * @param latestPeriod Set default period identifier
   * @param metricDimension Set default metric dimension
   * @param metricType Set default metric type
   * @returns IEditorFieldsGetResponse
   */
  @Get('/fields')
  @Security('apiKeyAuth')
  async getEditorFields(
    @Query() area?: string,
    @Query() areaTypeMax?: string,
    @Query() authorityArea?: string,
    @Query() childArea?: string,
    @Query() comparisonGroup?: string,
    @Query() includeChildArea?: string,
    @Query() latestPeriod?: string,
    @Query() metricDimension?: string,
    @Query() metricType?: string
  ): Promise<IEditorFieldsGetResponse> {
    let params: { [k: string]: any } = {}
    area == undefined ? undefined : (params.area = area)
    areaTypeMax == undefined ? undefined : (params.areaTypeMax = areaTypeMax)
    authorityArea == undefined
      ? undefined
      : (params.authorityArea = authorityArea)
    childArea == undefined ? undefined : (params.childArea = childArea)
    comparisonGroup == undefined
      ? undefined
      : (params.comparisonGroup = comparisonGroup)
    includeChildArea == undefined
      ? undefined
      : (params.includeChildArea = includeChildArea)
    latestPeriod == undefined ? undefined : (params.latestPeriod = latestPeriod)
    metricDimension == undefined
      ? undefined
      : (params.metricDimension = metricDimension)
    metricType == undefined ? undefined : (params.metricType = metricType)
    const response: IEditorFieldsGetResponse =
      await new EditorConfigRepository().getEditorField(params)
    return response
  }

  /**
   * @summary List of functions available, and associated metadata
   * @param area Default function list and labels for a particular area
   * @param areaTypeMax Specify highest level area type to show in hierarchy
   * @param authorityArea Default function list and labels for a particular authority area
   * @param childArea Default function list and labels for a particular child area
   * @param comparisonGroup Specify comparison group
   * @param includeChildArea Toggle whether to include child areas in hierarchy
   * @param latestPeriod Set default period identifier
   * @param metricDimension Set default metric dimension
   * @param metricType Set default metric type
   * @returns IEditorFieldsGetResponse
   */
  @Get('/functions')
  @Security('apiKeyAuth')
  async getEditorFunction(
    @Query() area?: string,
    @Query() areaTypeMax?: string,
    @Query() authorityArea?: string,
    @Query() childArea?: string,
    @Query() comparisonGroup?: string,
    @Query() includeChildArea?: string,
    @Query() latestPeriod?: string,
    @Query() metricDimension?: string,
    @Query() metricType?: string
  ): Promise<IEditorFunctionGetResponse> {
    let params: { [k: string]: any } = {}
    area == undefined ? undefined : (params.area = area)
    areaTypeMax == undefined ? undefined : (params.areaTypeMax = areaTypeMax)
    authorityArea == undefined
      ? undefined
      : (params.authorityArea = authorityArea)
    childArea == undefined ? undefined : (params.childArea = childArea)
    comparisonGroup == undefined
      ? undefined
      : (params.comparisonGroup = comparisonGroup)
    includeChildArea == undefined
      ? undefined
      : (params.includeChildArea = includeChildArea)
    latestPeriod == undefined ? undefined : (params.latestPeriod = latestPeriod)
    metricDimension == undefined
      ? undefined
      : (params.metricDimension = metricDimension)
    metricType == undefined ? undefined : (params.metricType = metricType)
    const response: IEditorFunctionGetResponse =
      await new EditorConfigRepository().getEditorFunction(params)
    return response
  }
}
