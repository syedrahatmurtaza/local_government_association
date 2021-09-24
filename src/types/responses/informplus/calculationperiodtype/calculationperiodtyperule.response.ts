export interface ICalculationPeriodTypeRulesGetResponse {
  calculationPeriodTypeRuleArray: CalculationPeriodTypeRuleArray[]
}

export interface CalculationPeriodTypeRuleArray {
  numeratorPeriodType: AtorPeriodType
  denominatorPeriodType: AtorPeriodType
  matchType: number
}

export interface AtorPeriodType {
  identifier: Identifier
  label: Label
  frequency: Frequency
}

export enum Frequency {
  Annually = 'Annually',
  Daily = 'Daily',
  EveryDecade = 'EveryDecade',
  Monthly = 'Monthly',
  Quarterly = 'Quarterly',
  SixMonths = 'SixMonths',
  Weekly = 'Weekly',
}

export enum Identifier {
  AcademicYear = 'AcademicYear',
  AnnualFromMarch = 'AnnualFromMarch',
  BiannuallyFinancial = 'BiannuallyFinancial',
  CalendarQuarter = 'CalendarQuarter',
  CalendarYear = 'CalendarYear',
  CensusYear = 'CensusYear',
  DTOCWeek = 'DTOCWeek',
  Daily = 'Daily',
  EarlyYearsCensusYear = 'EarlyYearsCensusYear',
  ElectionYear = 'ElectionYear',
  FinancialQuarter = 'FinancialQuarter',
  FinancialYear = 'FinancialYear',
  FiveYearCalendar = 'FiveYearCalendar',
  FiveYearFinancial = 'FiveYearFinancial',
  Month = 'Month',
  RollingCalendarQuarter = 'RollingCalendarQuarter',
  RollingWeek = 'RollingWeek',
  SnapshotAnnual30September = 'SnapshotAnnual30September',
  SnapshotAnnual31March = 'SnapshotAnnual31March',
  SnapshotAnnual31May = 'SnapshotAnnual31May',
  SnapshotAnnualFebruary = 'SnapshotAnnualFebruary',
  SnapshotAnnualJanuary = 'SnapshotAnnualJanuary',
  SnapshotQuarterly = 'SnapshotQuarterly',
  TaxbaseAnnual = 'TaxbaseAnnual',
  ThreeYearAcademic = 'ThreeYearAcademic',
  ThreeYearFinancial = 'ThreeYearFinancial',
  ThreeYearPeriod = 'ThreeYearPeriod',
  ThreeYearWinters = 'ThreeYearWinters',
  WeekEndFriday = 'WeekEndFriday',
  WeekEndSunday = 'WeekEndSunday',
  Winter = 'Winter',
  YearToDateQuarter2 = 'YearToDateQuarter2',
}

export enum Label {
  AcademicYear = 'Academic year',
  AnnualFromMarch = 'Annual (from March)',
  BiannuallyFinancial = 'Biannually financial',
  CalendarQuarter = 'Calendar quarter',
  CalendarYear = 'Calendar year',
  CensusYear = 'Census year',
  Daily = 'Daily',
  DelayedTransferOfCareWeek = 'Delayed Transfer of Care week',
  EarlyYearsCensusYear = 'Early Years Census year',
  ElectionYear = 'Election year',
  FinancialQuarter = 'Financial quarter',
  FinancialYear = 'Financial year',
  FinancialYearToQuarter2 = 'Financial year (to quarter 2)',
  FiveYearCalendar = 'Five-year calendar',
  FiveYearFinancial = 'Five-year financial',
  Month = 'Month',
  RollingCalendarQuarter = 'Rolling calendar quarter',
  RollingWeek = 'Rolling week',
  Snapshot30September = 'Snapshot (30 September)',
  Snapshot31March = 'Snapshot (31 March)',
  Snapshot31May = 'Snapshot (31 May)',
  SnapshotFebruary = 'Snapshot (February)',
  SnapshotJanuary = 'Snapshot (January)',
  SnapshotQuarterly = 'Snapshot (quarterly)',
  TaxbaseAnnual = 'Taxbase annual',
  ThreeYearAcademic = 'Three-year academic',
  ThreeYearFinancial = 'Three-year financial',
  ThreeYearPeriod = 'Three-year period',
  ThreeYearWinters = 'Three-year winters',
  Weekly = 'Weekly',
  WeeklyToSunday = 'Weekly (to Sunday)',
  Winter = 'Winter',
}
