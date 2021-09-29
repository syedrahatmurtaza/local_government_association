export interface IEditorFunctionGetResponse {
  'text-token-function-list': TextTokenFunctionList
}

export interface TextTokenFunctionList {
  source: SourceFunction[]
}

export interface SourceFunction {
  name: string
  syntax: string
  requiredParameters: string
  description: string
  examples: string[]
}
