import { EditorConfigService } from '../services/informplus/editorConfig.service'
import { IEditorConfigGetResponse } from '../types/responses/informPlus/editor/config.response'
import { IEditorFieldsGetResponse } from '../types/responses/informPlus/editor/field.response'
import { IEditorFunctionGetResponse } from '../types/responses/informPlus/editor/function.response'

export class EditorConfigRepository {
  constructor() {}

  async getEditorConfig(params: any) {
    const response = await new EditorConfigService().getEditorConfig(params)
    return <IEditorConfigGetResponse>response.data
  }

  async getEditorField(params: any) {
    const response = await new EditorConfigService().getEditorField(params)
    return <IEditorFieldsGetResponse>response.data
  }

  async getEditorFunction(params: any) {
    const response = await new EditorConfigService().getEditorFunction(params)
    return <IEditorFunctionGetResponse>response.data
  }
}
