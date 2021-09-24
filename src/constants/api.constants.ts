import { API_VERSION_1 } from './string.constants'

/***************************      Target API local Government Association     *****************************************/
// Base URL
const BASE_URL_LOCAL_GOVERNMENT_ASSOCIATION = 'https://webservices.esd.org.uk'

/***************************      Target API Area Types     *****************************************/
// Area Types
export const AREA_TYPES_TARGET_URL =
  BASE_URL_LOCAL_GOVERNMENT_ASSOCIATION + '/areaTypes'

// Area Types Filter Data
export const AREA_TYPES_FILTER_DATA_TARGET_URL =
  BASE_URL_LOCAL_GOVERNMENT_ASSOCIATION + '/areaTypes/filter-data'

// Area Types Current
export const AREA_TYPES_CURRENT_TARGET_URL =
  BASE_URL_LOCAL_GOVERNMENT_ASSOCIATION + '/areaTypes/current'

// Area Types Verbose
export const AREA_TYPES_VERBOSE_TARGET_URL =
  BASE_URL_LOCAL_GOVERNMENT_ASSOCIATION + '/areaTypes/verbose'

// Area Types Identifer
export const AREA_TYPES_IDENTIFER_TARGET_URL =
  BASE_URL_LOCAL_GOVERNMENT_ASSOCIATION + '/areaTypes'

/***************************      Target API Area     *****************************************/
// Area
export const AREA_TARGET_URL = BASE_URL_LOCAL_GOVERNMENT_ASSOCIATION + '/areas'

// Area Identifier
export const AREA_IDENTIFIER_TARGET_URL =
  BASE_URL_LOCAL_GOVERNMENT_ASSOCIATION + '/areas/'

// Area Identifier Bound
export const AREA_IDENTIFIER_BOUNDS_TARGET_URL =
  BASE_URL_LOCAL_GOVERNMENT_ASSOCIATION + '/areas/'
export const SUB_BOUND_TARGET_URL = '/bounds'

/***************************      Target API Bounds    *****************************************/
// Bounds
export const BOUND_TARGET_URL =
  BASE_URL_LOCAL_GOVERNMENT_ASSOCIATION + '/bounds/'

/***************************      Target API Calculation Methods    *****************************************/
// Calculation Methods
export const CALCULATION_METHODS_TARGET_URL =
  BASE_URL_LOCAL_GOVERNMENT_ASSOCIATION + '/calculationMethods/'

// Calculation Methods Verbose
export const CALCULATION_METHODS_VERBOSE_TARGET_URL =
  BASE_URL_LOCAL_GOVERNMENT_ASSOCIATION + '/calculationMethods/verbose'

// Calculation Methods Verbose
export const CALCULATION_METHODS_IDENTIFIER_TARGET_URL =
  BASE_URL_LOCAL_GOVERNMENT_ASSOCIATION + '/calculationMethods/'

/***************************      Target API Calculation Period Type Rules    *****************************************/
// Calculation Period Type Rules
export const CALCULATION_PERIOD_TYPE_RULES_TARGET_URL =
  BASE_URL_LOCAL_GOVERNMENT_ASSOCIATION + '/calculationPeriodTypeRules'

/***************************      Target API Client Application    *****************************************/
// Client Application
export const CLIENT_APPLICATION_TARGET_URL =
  BASE_URL_LOCAL_GOVERNMENT_ASSOCIATION + '/clientApplications'

// Client Application Verbose
export const CLIENT_APPLICATION_VERBOSE_TARGET_URL =
  BASE_URL_LOCAL_GOVERNMENT_ASSOCIATION + '/clientApplications/verbose'

// Client Application Identifier
export const CLIENT_APPLICATION_IDENTIFIER_TARGET_URL =
  BASE_URL_LOCAL_GOVERNMENT_ASSOCIATION + '/clientApplications/'
