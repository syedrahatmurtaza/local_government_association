export interface IEditorConfigGetResponse {
  'text-token-configuration': TextTokenConfiguration
}

export interface TextTokenConfiguration {
  data: Data
  'tab-array': TabArray[]
}

export interface Data {
  'areas-fixed': Areas
  'areas-relative': Areas
  'ranked-metric-type-options': RankedOptions
  'ranked-area-options': RankedOptions
  'metadata-options': MetadataOptions
  'metric-value-options': EquivalentOptionsClass
  'equivalent-options': EquivalentOptionsClass
  'derived-options': DerivedOptionsClass
  'percent-options': DerivedOptionsClass
  'summary-type-options': { [key: string]: Capitalisation }
  'summary-type-return-options': SummaryTypeReturnOptions
  'value-type-options': { [key: string]: Capitalisation }
  'value-type-derived-options': { [key: string]: Capitalisation }
  'label-length-options': LabelLengthOptions
  'label-case-options': LabelCaseOptions
  'capitalisation-options': CapitalisationOptions
}

export interface Areas {}

export interface CapitalisationOptions {
  capitalisation: Capitalisation
  nocaps: Capitalisation
}

export interface Capitalisation {
  identifier: string
  label: string
  index: number
}

export interface DerivedOptionsClass {
  value: Capitalisation
  'value-with-units'?: Capitalisation
  'value-with-full-derivation': Capitalisation
  'value-with-units-full-derivation': Capitalisation
  'full-derivation': Capitalisation
}

export interface EquivalentOptionsClass {
  value: Capitalisation
  'value-with-units': Capitalisation
  'period-label': Capitalisation
  'degree-of-fit': Capitalisation
  'value-with-full-derivation': Capitalisation
  'value-with-units-full-derivation': Capitalisation
  'full-derivation': Capitalisation
}

export interface LabelCaseOptions {
  case: Capitalisation
  plural: Capitalisation
  both: Capitalisation
}

export interface LabelLengthOptions {
  label: Capitalisation
  'short-label': Capitalisation
  'long-label': Capitalisation
}

export interface MetadataOptions {
  label: Capitalisation
  'short-label': Capitalisation
  source: Capitalisation
  identifier: Capitalisation
  collection: Capitalisation
  'help-text': Capitalisation
  'formatted-help-text': Capitalisation
  polarity: Capitalisation
  'data-last-updated': Capitalisation
}

export interface RankedOptions {
  label: Capitalisation
  'short-label': Capitalisation
  'lower-case-label': Capitalisation
  value: Capitalisation
  'value-with-units': Capitalisation
  percent: Capitalisation
  'long-area-label'?: Capitalisation
  'value-with-full-derivation': Capitalisation
  'value-with-units-full-derivation': Capitalisation
  'dimension-label'?: Capitalisation
}

export interface SummaryTypeReturnOptions {
  value: Capitalisation
  'value-with-units': Capitalisation
}

export interface TabArray {
  identifier: string
  label: string
  index: number
  'tab-type': TabType
  description: string
  'field-array': FieldArray[]
  'output-text'?: string
}

export interface FieldArray {
  identifier?: string
  label: string
  hint?: string
  options: string
  default?: string
}

export enum TabType {
  Fields = 'Fields',
  Function = 'Function',
}
