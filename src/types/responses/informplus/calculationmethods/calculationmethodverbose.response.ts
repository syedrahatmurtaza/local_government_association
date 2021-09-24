export interface ICalculationMethodVerboseGetResponse {
  'calculationMethod-array': CalculationMethodArrayVerbose[]
}

export interface CalculationMethodArrayVerbose {
  identifier: string
  label: string
  description: string
  fields: Field[]
}

export interface Field {
  label: string
  identifier: string
  description: string
  lookupTable?: string
  lookupId?: string
  lookupDisplay?: string
}
