import { DimensionMembersService } from '../services/informplus/dimensionMembers.service'
import { IDimensionMemberGetResponse } from '../types/responses/informPlus/dimensionMembers/dimensionMembers.response'
import { IDimensionMembersIdentifierGetResponse } from '../types/responses/informPlus/dimensionMembers/dimensionMembersIdentifier.response'
import { IDimensionMemberVerboseGetResponse } from '../types/responses/informPlus/dimensionMembers/dimensionMembersVerbose.response'

export class DimensionMembersRepository {
  constructor() {}

  async getDimensionMembers() {
    const response = await new DimensionMembersService().getDimensionMembers()
    return <IDimensionMemberGetResponse>response.data
  }

  async getDimensionMembersVerbose() {
    const response =
      await new DimensionMembersService().getDimensionMembersVerbose()
    return <IDimensionMemberVerboseGetResponse>response.data
  }

  async getDimensionMembersIdentifier(identifier: string) {
    const response =
      await new DimensionMembersService().getDimensionMembersIdentifier(
        identifier
      )
    return <IDimensionMembersIdentifierGetResponse>response.data
  }
}
