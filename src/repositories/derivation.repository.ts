import { DerivationService } from '../services/informplus/derivation.service'

export class DerivationRepository {
  constructor() {}

  async getDerivation(params: any) {
    const response = await new DerivationService().getDerivation(params)
    return <string>response.data
  }
}
