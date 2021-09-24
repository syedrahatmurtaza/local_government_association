export interface ICalculationMethodIdentifierGetResponse {
  calculationMethod: CalculationMethodIdentifier
}

export interface CalculationMethodIdentifier {
  identifier: string
  label: string
  description: string
  fields?: FieldIdentifier[]
}

export interface FieldIdentifier {
  identifier: string
  label: string
  description: string
}
