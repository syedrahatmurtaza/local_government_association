import { Controller, Get, Query, Route, Security, Tags } from '@tsoa/runtime'
import { DerivationRepository } from '../repositories/derivation.repository'

@Route('v1/derivation')
@Tags('derivation')
export class DerivationController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Shows the source and calculation steps (if applicable) for a specified metric value
   * @param area The area or comparison group that the derived data values are for
   * @param metricType The metric type ID the derived data values are for
   * @param period The time period that is to be returned. To just retrieve data for the latest available period, use "latest". For the most recent two time periods, use "latest:2", and so on. Otherwise one or more time period identifiers can be used
   * @param customBands Definite custom bands for comparisons
   * @param organisationID Show derivation from perspective of a specific organisation
   * @param outputType Specify values, metrictypes or both to determine the data included in the output
   * @param valueType Show derivation information for a specified type of derived value
   * @param virtualMetricTypeDenominator Specify denominator metric ID to use in virtual metric calculation
   * @param virtualMetricTypeLabel Specify a label for your virtual metric
   * @param virtualMetricTypeMultiple Specify a multiple for your virtual metric calculation
   * @param virtualMetricTypeNumerator Specify numerator metric ID to use in virtual metric calculation
   * @param withArea Add comparative area for value types which need it
   * @param withPeriod Add comparative period for value types which need it
   * @returns string
   */
  @Get('/')
  @Security('apiKeyAuth')
  async getDerivation(
    @Query() area: string,
    @Query() metricType: number,
    @Query() period: string,
    @Query() customBands?: string,
    @Query() organisationID?: string,
    @Query() outputType?: string,
    @Query() valueType?: string,
    @Query('virtualMetricType.denominator')
    virtualMetricTypeDenominator?: string,
    @Query('virtualMetricType.label') virtualMetricTypeLabel?: string,
    @Query('virtualMetricType.multiple') virtualMetricTypeMultiple?: string,
    @Query('virtualMetricType.numerator') virtualMetricTypeNumerator?: string,
    @Query() withArea?: string,
    @Query() withPeriod?: string
  ): Promise<string> {
    let params: { [k: string]: any } = {}
    area == undefined ? undefined : (params.area = area)
    metricType == undefined ? undefined : (params.metricType = metricType)
    period == undefined ? undefined : (params.period = period)
    customBands == undefined ? undefined : (params.customBands = customBands)
    organisationID == undefined
      ? undefined
      : (params.organisationID = organisationID)
    outputType == undefined ? undefined : (params.outputType = outputType)
    valueType == undefined ? undefined : (params.valueType = valueType)
    virtualMetricTypeDenominator == undefined
      ? undefined
      : (params['virtualMetricType.denominator'] = virtualMetricTypeDenominator)
    virtualMetricTypeLabel == undefined
      ? undefined
      : (params['virtualMetricType.label'] = virtualMetricTypeLabel)
    virtualMetricTypeMultiple == undefined
      ? undefined
      : (params['virtualMetricType.multiple'] = virtualMetricTypeMultiple)
    virtualMetricTypeNumerator == undefined
      ? undefined
      : (params['virtualMetricType.numerator'] = virtualMetricTypeNumerator)
    withArea == undefined ? undefined : (params.withArea = withArea)
    withPeriod == undefined ? undefined : (params.withPeriod = withPeriod)

    const response: string = await new DerivationRepository().getDerivation(
      params
    )
    return response
  }
}
