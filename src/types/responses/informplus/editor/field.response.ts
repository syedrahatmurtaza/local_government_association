export interface IEditorFieldsGetResponse {
  'text-token-field-list': TextTokenFieldList
}

export interface TextTokenFieldList {
  source: Source[]
}

export interface Source {
  name: string
  description: string
}
