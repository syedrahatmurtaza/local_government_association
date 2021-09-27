import { ClientApplicationService } from '../services/informplus/clientApplication.service'
import { IClientApplicationGetResponse } from '../types/responses/informPlus/clientApplication/clientApplication.response'
import { IClientApplicationIdentifierGetResponse } from '../types/responses/informPlus/clientApplication/clientApplicationIdentifier.response'
import { IClientApplicationVerboseGetResponse } from '../types/responses/informPlus/clientApplication/clientApplicationVerbose.response'

export class ClientApplicationRepository {
  constructor() {}

  async getClientApplication() {
    const response = await new ClientApplicationService().getClientApplication()
    return <IClientApplicationGetResponse>response.data
  }

  async getClientApplicationVerbose() {
    const response =
      await new ClientApplicationService().getClientApplicationVerbose()
    return <IClientApplicationVerboseGetResponse>response.data
  }

  async getClientApplicationIdentifier(identifier: string) {
    const response =
      await new ClientApplicationService().getClientApplicationIdentifier(
        identifier
      )
    return <IClientApplicationIdentifierGetResponse>response.data
  }
}
