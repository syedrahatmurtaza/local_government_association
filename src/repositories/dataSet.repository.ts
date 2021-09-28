import { DataSetService } from '../services/informplus/dataSet.service'
import { IDataSetGetResponse } from '../types/responses/informPlus/dataSet/dataSet.response'
import { IDataSetIdentifierGetResponse } from '../types/responses/informPlus/dataSet/dataSetIdentifier.response'
import { IDataSetVerboseGetResponse } from '../types/responses/informPlus/dataSet/dataSetVerbose.response'

export class DataSetRepository {
  constructor() {}

  async getDataSet() {
    const response = await new DataSetService().getDataSet()
    return <IDataSetGetResponse>response.data
  }

  async getDataSetVerbose() {
    const response = await new DataSetService().getDataSetVerbose()
    return <IDataSetVerboseGetResponse>response.data
  }

  async getDataSetIdentifier(identifier: number) {
    const response = await new DataSetService().getDataSetIdentifier(identifier)
    return <IDataSetIdentifierGetResponse>response.data
  }
}
