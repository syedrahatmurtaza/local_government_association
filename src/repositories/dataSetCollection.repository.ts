import { DataSetCollectionService } from '../services/informplus/dataSetCollection.service'
import { IDataSetCollectionGetResponse } from '../types/responses/informPlus/dataSetCollection/dataSetCollection.response'
import { IDataSetCollectionIdentifierGetResponse } from '../types/responses/informPlus/dataSetCollection/dataSetCollectionIdentifier.response'
import { IDataSetCollectionVerboseGetResponse } from '../types/responses/informPlus/dataSetCollection/dataSetCollectionVerbose.response'

export class DataSetCollectionRepository {
  constructor() {}

  async getDataSetCollection(params: any) {
    const response = await new DataSetCollectionService().getDataSetCollection(
      params
    )
    return <IDataSetCollectionGetResponse>response.data
  }

  async getDataSetCollectionVerbose() {
    const response =
      await new DataSetCollectionService().getDataSetCollectionVerbose()
    return <IDataSetCollectionVerboseGetResponse>response.data
  }

  async getDataSetCollectionIdentifier(identifier: number) {
    const response =
      await new DataSetCollectionService().getDataSetCollectionIdentifier(
        identifier
      )
    return <IDataSetCollectionIdentifierGetResponse>response.data
  }
}
