import {
  Controller,
  Get,
  Path,
  Query,
  Route,
  Security,
  Tags,
} from '@tsoa/runtime'

@Route('v1/')
export class Template_Controller extends Controller {
  constructor() {
    super()
  }
}
