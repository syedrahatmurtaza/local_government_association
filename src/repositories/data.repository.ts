import { DataService } from '../services/informplus/data.service'
import { IDataGetResponse } from '../types/responses/informPlus/datas/data.response'
import { IDataRegressionGetResponse } from '../types/responses/informPlus/datas/dataRegression.response'
import { IDataTableGetResponse } from '../types/responses/informPlus/datas/dataTable.response'

export class DataRepository {
  constructor() {}

  async getData(params: any) {
    const response = await new DataService().getData(params)
    return <IDataGetResponse>response.data
  }

  async getDataRegression(params: any) {
    const response = await new DataService().getDataRegression(params)
    return <IDataRegressionGetResponse>response.data
  }

  async getDataTable(params: any) {
    const response = await new DataService().getDataTable(params)
    return <IDataTableGetResponse[]>response.data
  }
}
