import { Dataset } from './dataSet.response'

export interface IDataSetVerboseGetResponse {
  'dataset-array': DatasetVerbose[]
}

export interface DatasetVerbose {
  identifier: string
  label: string
  isSpecificToOrganisation: boolean
  applicableAreaTypes: ApplicableAreaType[]
  collection: CollectionVerbose
  measures: Measure[]
}

export interface ApplicableAreaType {
  identifier: string
  label: string
  shortLabel: string
  longLabel: string
  isGroup: boolean
}

export interface CollectionVerbose {
  identifier: string
  label: string
  url: string
  isLocalCollectionRequired: boolean
  sourceName: string
}

export interface Measure {
  identifier: string
  label: string
  dataset: Dataset
  measurementUnit: MeasurementUnit
}

export interface MeasurementUnit {
  identifier: string
  label: string
  shortLabel: string
}
