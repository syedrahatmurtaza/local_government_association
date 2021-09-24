export interface ICalculationMethodGetResponse {
  'calculationMethod-array': CalculationMethodArray[]
}

export interface CalculationMethodArray {
  identifier: string
  label: string
  description: string
}
