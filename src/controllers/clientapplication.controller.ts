import { Controller, Get, Path, Route, Security, Tags } from '@tsoa/runtime'
import { ClientApplicationRepository } from '../repositories/clientapplication.repository'
import { IClientApplicationGetResponse } from '../types/responses/informplus/clientapplication/clientapplication.response'
import { IClientApplicationIdentifierGetResponse } from '../types/responses/informplus/clientapplication/clientapplicationidentifier.response'
import { IClientApplicationVerboseGetResponse } from '../types/responses/informplus/clientapplication/clientapplicationverbose.response'

@Route('v1/clientApplications')
@Tags('clientApplications')
export class ClientApplicationController extends Controller {
  constructor() {
    super()
  }

  /**
   * @summary Show available client applications
   * @returns IClientApplicationGetResponse
   */
  @Get('/')
  @Security('apiKeyAuth')
  async getClientApplication(): Promise<IClientApplicationGetResponse> {
    const response: IClientApplicationGetResponse =
      await new ClientApplicationRepository().getClientApplication()
    return response
  }

  /**
   * @summary Show available client applications
   * @returns IClientApplicationVerboseGetResponse
   */
  @Get('/verbose')
  @Security('apiKeyAuth')
  async getClientApplicationVerbose(): Promise<IClientApplicationVerboseGetResponse> {
    const response: IClientApplicationVerboseGetResponse =
      await new ClientApplicationRepository().getClientApplicationVerbose()
    return response
  }

  /**
   * @summary Show details of specific client application
   * @param identifier (Inform)
   * @returns IClientApplicationIdentifierGetResponse
   */
  @Get('/{identifier}')
  @Security('apiKeyAuth')
  async getClientApplicationIdentifier(
    @Path() identifier: string
  ): Promise<IClientApplicationIdentifierGetResponse> {
    const response: IClientApplicationIdentifierGetResponse =
      await new ClientApplicationRepository().getClientApplicationIdentifier(
        identifier
      )
    return response
  }
}
