import * as express from 'express'
import { AreaTypesService } from '../services/informplus/areatypes.service'
import { ApiKeyUtil } from '../utils/apikey.util'

export function expressAuthentication(
  req: express.Request,
  name: string,
  scopes?: string[]
): Promise<any> {
  if (name === 'apiKeyAuth') {
    let applicationKey
    if (req.query && req.query.ApplicationKey) {
      applicationKey = req.query.ApplicationKey
      ApiKeyUtil.setKeyValue(applicationKey.toString())
    } else {
      return Promise.reject({ message: 'Missing ApplicationKey' })
    }

    return Promise.resolve()
  } else {
    if (req.query && req.query.tsoa && req.query.tsoa === 'abc123456') {
      return Promise.resolve({})
    } else {
      return Promise.reject({ message: 'other' })
    }
  }
}
