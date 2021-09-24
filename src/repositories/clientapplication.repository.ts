import { ClientApplicationService } from '../services/informplus/clientapplication.service'
import { IClientApplicationGetResponse } from '../types/responses/informplus/clientapplication/clientapplication.response'
import { IClientApplicationIdentifierGetResponse } from '../types/responses/informplus/clientapplication/clientapplicationidentifier.response'
import { IClientApplicationVerboseGetResponse } from '../types/responses/informplus/clientapplication/clientapplicationverbose.response'

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
