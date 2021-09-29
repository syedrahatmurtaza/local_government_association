/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AreaController } from './../controllers/area.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AreaTypesController } from './../controllers/areaTypes.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { BoundController } from './../controllers/bound.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CalculationMethodController } from './../controllers/calculationMethod.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CalculationPeriodTypeRulesController } from './../controllers/calculationPeriodTypeRules.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ClientApplicationController } from './../controllers/clientApplication.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ComparisonGroupsController } from './../controllers/comparisonGroups.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ComparisonGroupTypesController } from './../controllers/comparisonGroupTypes.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DataController } from './../controllers/data.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DataSetController } from './../controllers/dataSet.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DataSetCollectionController } from './../controllers/dataSetCollection.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DerivationController } from './../controllers/derivation.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DimensionMembersController } from './../controllers/dimensionMembers.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DimensionsController } from './../controllers/dimensions.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { EditorConfigController } from './../controllers/editorConfig.controller';
import { expressAuthentication } from './../middlewears/authentication';
// @ts-ignore - no great way to install types from subpackage
const promiseAny = require('promise.any');
import * as express from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "AreaTypeSimple": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "isGroup": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AreaArray": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "shortLabel": {"dataType":"string","required":true},
            "longLabel": {"dataType":"string","required":true},
            "areaType": {"ref":"AreaTypeSimple","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAreaGetResponse": {
        "dataType": "refObject",
        "properties": {
            "area-array": {"dataType":"array","array":{"dataType":"refObject","ref":"AreaArray"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AreaTypeArray": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "shortLabel": {"dataType":"string","required":true},
            "longLabel": {"dataType":"string","required":true},
            "isGroup": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AreaTypeIdentifer": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "shortLabel": {"dataType":"string","required":true},
            "longLabel": {"dataType":"string","required":true},
            "isGroup": {"dataType":"boolean","required":true},
            "areaType": {"ref":"AreaTypeArray","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BoundingBox": {
        "dataType": "refObject",
        "properties": {
            "minLatitude": {"dataType":"double","required":true},
            "maxLatitude": {"dataType":"double","required":true},
            "minLongitude": {"dataType":"double","required":true},
            "maxLongitude": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GovernedBy": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "shortLabel": {"dataType":"string","required":true},
            "governs": {"ref":"AreaTypeArray","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Type": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DefaultComparisonGroup": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "isCustom": {"dataType":"boolean","required":true},
            "label": {"dataType":"string","required":true},
            "type": {"ref":"Type","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Area": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "shortLabel": {"dataType":"string","required":true},
            "longLabel": {"dataType":"string","required":true},
            "areaType": {"ref":"AreaTypeIdentifer","required":true},
            "boundingBox": {"ref":"BoundingBox","required":true},
            "governedBy": {"ref":"GovernedBy","required":true},
            "memberOf": {"dataType":"array","array":{"dataType":"refObject","ref":"DefaultComparisonGroup"},"required":true},
            "ownerOf": {"dataType":"array","array":{"dataType":"refObject","ref":"DefaultComparisonGroup"},"required":true},
            "defaultComparisonGroup": {"ref":"DefaultComparisonGroup","required":true},
            "childOf": {"dataType":"array","array":{"dataType":"refObject","ref":"AreaTypeIdentifer"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAreaIdentifierGetResponse": {
        "dataType": "refObject",
        "properties": {
            "area": {"ref":"Area","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAreaIdentifierBoundGetResponse": {
        "dataType": "refObject",
        "properties": {
            "boundingBox": {"ref":"BoundingBox","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAreaTypeGetResponse": {
        "dataType": "refObject",
        "properties": {
            "areaType-array": {"dataType":"array","array":{"dataType":"refObject","ref":"AreaTypeArray"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAreaTypeCurrentGetResponse": {
        "dataType": "refObject",
        "properties": {
            "areaType-array": {"dataType":"array","array":{"dataType":"refObject","ref":"AreaTypeArray"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAreaTypeFilterDataGetResponse": {
        "dataType": "refObject",
        "properties": {
            "areaType-array": {"dataType":"array","array":{"dataType":"refObject","ref":"AreaTypeArray"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AreaTypeArrayVerbose": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "shortLabel": {"dataType":"string","required":true},
            "longLabel": {"dataType":"string","required":true},
            "isGroup": {"dataType":"boolean","required":true},
            "isMain": {"dataType":"boolean","required":true},
            "childOf": {"dataType":"array","array":{"dataType":"refObject","ref":"AreaTypeArray"},"required":true},
            "parentOf": {"dataType":"array","array":{"dataType":"refObject","ref":"AreaTypeArray"},"required":true},
            "memberOf": {"dataType":"array","array":{"dataType":"refObject","ref":"AreaTypeArray"},"required":true},
            "sameAs": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "description": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAreaTypeVerboseGetResponse": {
        "dataType": "refObject",
        "properties": {
            "areaType-array": {"dataType":"array","array":{"dataType":"refObject","ref":"AreaTypeArrayVerbose"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AreaType": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "shortLabel": {"dataType":"string","required":true},
            "longLabel": {"dataType":"string","required":true},
            "isGroup": {"dataType":"boolean","required":true},
            "isMain": {"dataType":"boolean","required":true},
            "childOf": {"dataType":"array","array":{"dataType":"refObject","ref":"AreaTypeArray"},"required":true},
            "parentOf": {"dataType":"array","array":{"dataType":"refObject","ref":"AreaTypeArray"},"required":true},
            "memberOf": {"dataType":"array","array":{"dataType":"refObject","ref":"AreaTypeArray"},"required":true},
            "sameAs": {"dataType":"array","array":{"dataType":"string"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAreaTypeIdentifierGetResponse": {
        "dataType": "refObject",
        "properties": {
            "areaType": {"ref":"AreaType","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IBoundsGetResponse": {
        "dataType": "refObject",
        "properties": {
            "boundingBox": {"ref":"BoundingBox","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CalculationMethodArray": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICalculationMethodGetResponse": {
        "dataType": "refObject",
        "properties": {
            "calculationMethod-array": {"dataType":"array","array":{"dataType":"refObject","ref":"CalculationMethodArray"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Field": {
        "dataType": "refObject",
        "properties": {
            "label": {"dataType":"string","required":true},
            "identifier": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "lookupTable": {"dataType":"string"},
            "lookupId": {"dataType":"string"},
            "lookupDisplay": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CalculationMethodArrayVerbose": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "fields": {"dataType":"array","array":{"dataType":"refObject","ref":"Field"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICalculationMethodVerboseGetResponse": {
        "dataType": "refObject",
        "properties": {
            "calculationMethod-array": {"dataType":"array","array":{"dataType":"refObject","ref":"CalculationMethodArrayVerbose"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FieldIdentifier": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CalculationMethodIdentifier": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "fields": {"dataType":"array","array":{"dataType":"refObject","ref":"FieldIdentifier"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICalculationMethodIdentifierGetResponse": {
        "dataType": "refObject",
        "properties": {
            "calculationMethod": {"ref":"CalculationMethodIdentifier","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Identifier": {
        "dataType": "refEnum",
        "enums": ["AcademicYear","AnnualFromMarch","BiannuallyFinancial","CalendarQuarter","CalendarYear","CensusYear","DTOCWeek","Daily","EarlyYearsCensusYear","ElectionYear","FinancialQuarter","FinancialYear","FiveYearCalendar","FiveYearFinancial","Month","RollingCalendarQuarter","RollingWeek","SnapshotAnnual30September","SnapshotAnnual31March","SnapshotAnnual31May","SnapshotAnnualFebruary","SnapshotAnnualJanuary","SnapshotQuarterly","TaxbaseAnnual","ThreeYearAcademic","ThreeYearFinancial","ThreeYearPeriod","ThreeYearWinters","WeekEndFriday","WeekEndSunday","Winter","YearToDateQuarter2"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Label": {
        "dataType": "refEnum",
        "enums": ["Academic year","Annual (from March)","Biannually financial","Calendar quarter","Calendar year","Census year","Daily","Delayed Transfer of Care week","Early Years Census year","Election year","Financial quarter","Financial year","Financial year (to quarter 2)","Five-year calendar","Five-year financial","Month","Rolling calendar quarter","Rolling week","Snapshot (30 September)","Snapshot (31 March)","Snapshot (31 May)","Snapshot (February)","Snapshot (January)","Snapshot (quarterly)","Taxbase annual","Three-year academic","Three-year financial","Three-year period","Three-year winters","Weekly","Weekly (to Sunday)","Winter"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Frequency": {
        "dataType": "refEnum",
        "enums": ["Annually","Daily","EveryDecade","Monthly","Quarterly","SixMonths","Weekly"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AtorPeriodType": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"ref":"Identifier","required":true},
            "label": {"ref":"Label","required":true},
            "frequency": {"ref":"Frequency","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CalculationPeriodTypeRuleArray": {
        "dataType": "refObject",
        "properties": {
            "numeratorPeriodType": {"ref":"AtorPeriodType","required":true},
            "denominatorPeriodType": {"ref":"AtorPeriodType","required":true},
            "matchType": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICalculationPeriodTypeRulesGetResponse": {
        "dataType": "refObject",
        "properties": {
            "calculationPeriodTypeRuleArray": {"dataType":"array","array":{"dataType":"refObject","ref":"CalculationPeriodTypeRuleArray"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ClientApplication": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IClientApplicationGetResponse": {
        "dataType": "refObject",
        "properties": {
            "clientApplicationArray": {"dataType":"array","array":{"dataType":"refObject","ref":"ClientApplication"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IClientApplicationVerboseGetResponse": {
        "dataType": "refObject",
        "properties": {
            "clientApplicationArray": {"dataType":"array","array":{"dataType":"refObject","ref":"ClientApplication"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IClientApplicationIdentifierGetResponse": {
        "dataType": "refObject",
        "properties": {
            "clientApplication": {"ref":"ClientApplication","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ComparisonGroup": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "isCustom": {"dataType":"boolean","required":true},
            "label": {"dataType":"string","required":true},
            "type": {"ref":"Type","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IComparisonGroupsGetResponse": {
        "dataType": "refObject",
        "properties": {
            "comparisonGroup-array": {"dataType":"array","array":{"dataType":"refObject","ref":"ComparisonGroup"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Member": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "shortLabel": {"dataType":"string","required":true},
            "longLabel": {"dataType":"string","required":true},
            "areaType": {"ref":"Member"},
            "isGroup": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Tier": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "isCustom": {"dataType":"boolean","required":true},
            "label": {"dataType":"string","required":true},
            "type": {"ref":"Type","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ComparisonGroupIdentifier": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "isCustom": {"dataType":"boolean","required":true},
            "label": {"dataType":"string","required":true},
            "members": {"dataType":"array","array":{"dataType":"refObject","ref":"Member"},"required":true},
            "owners": {"dataType":"array","array":{"dataType":"refObject","ref":"Member"},"required":true},
            "isMain": {"dataType":"boolean","required":true},
            "isHidden": {"dataType":"boolean","required":true},
            "bottomTier": {"ref":"Tier","required":true},
            "topTier": {"ref":"Tier","required":true},
            "type": {"ref":"Type","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IComparisonGroupsIdentifierGetResponse": {
        "dataType": "refObject",
        "properties": {
            "comparisonGroup": {"ref":"ComparisonGroupIdentifier","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IComparisonGroupsIdentifierBoundsGetResponse": {
        "dataType": "refObject",
        "properties": {
            "boundingBox": {"ref":"BoundingBox","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ComparisonGroupTypeArray": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IComparisonGroupTypesGetResponse": {
        "dataType": "refObject",
        "properties": {
            "comparisonGroupType-array": {"dataType":"array","array":{"dataType":"refObject","ref":"ComparisonGroupTypeArray"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IComparisonGroupTypesVerboseGetResponse": {
        "dataType": "refObject",
        "properties": {
            "comparisonGroupType-array": {"dataType":"array","array":{"dataType":"refObject","ref":"ComparisonGroupTypeArray"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ComparisonGroupType": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IComparisonGroupTypesIdentifierGetResponse": {
        "dataType": "refObject",
        "properties": {
            "comparisonGroupType": {"ref":"ComparisonGroupType","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Metadata": {
        "dataType": "refObject",
        "properties": {
            "columnGrouping": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "rowGrouping": {"dataType":"array","array":{"dataType":"any"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Areadata": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "altLabel": {"dataType":"string"},
            "isSummary": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Column": {
        "dataType": "refObject",
        "properties": {
            "area": {"ref":"Areadata","required":true},
            "metricType": {"ref":"Areadata","required":true},
            "period": {"ref":"Areadata","required":true},
            "valueType": {"ref":"Areadata","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Value": {
        "dataType": "refObject",
        "properties": {
            "source": {"dataType":"double","required":true},
            "value": {"dataType":"double","required":true},
            "formatted": {"dataType":"string","required":true},
            "format": {"dataType":"string","required":true},
            "publicationStatus": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Row": {
        "dataType": "refObject",
        "properties": {
            "values": {"dataType":"array","array":{"dataType":"refObject","ref":"Value"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDataGetResponse": {
        "dataType": "refObject",
        "properties": {
            "metadata": {"ref":"Metadata","required":true},
            "columns": {"dataType":"array","array":{"dataType":"refObject","ref":"Column"},"required":true},
            "rows": {"dataType":"array","array":{"dataType":"refObject","ref":"Row"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MetadataRegression": {
        "dataType": "refObject",
        "properties": {
            "columnGrouping": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "rowGrouping": {"dataType":"array","array":{"dataType":"string"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MetricType": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "altLabel": {"dataType":"string"},
            "isSummary": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ColumnRegression": {
        "dataType": "refObject",
        "properties": {
            "metricType": {"ref":"MetricType","required":true},
            "period": {"ref":"MetricType","required":true},
            "valueType": {"ref":"MetricType","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RowRegression": {
        "dataType": "refObject",
        "properties": {
            "area": {"ref":"MetricType","required":true},
            "values": {"dataType":"array","array":{"dataType":"refObject","ref":"Value"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Coordinate": {
        "dataType": "refObject",
        "properties": {
            "x": {"dataType":"double","required":true},
            "y": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Regression": {
        "dataType": "refObject",
        "properties": {
            "coordinates": {"dataType":"array","array":{"dataType":"refObject","ref":"Coordinate"},"required":true},
            "rSquare": {"dataType":"double","required":true},
            "rSquareLog": {"dataType":"double"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDataRegressionGetResponse": {
        "dataType": "refObject",
        "properties": {
            "metadata": {"ref":"MetadataRegression","required":true},
            "columns": {"dataType":"array","array":{"dataType":"refObject","ref":"ColumnRegression"},"required":true},
            "rows": {"dataType":"array","array":{"dataType":"refObject","ref":"RowRegression"},"required":true},
            "regressions": {"dataType":"array","array":{"dataType":"refObject","ref":"Regression"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDataTableGetResponse": {
        "dataType": "refObject",
        "properties": {
            "metricTypeIdentifier": {"dataType":"string","required":true},
            "metricTypeLabel": {"dataType":"string","required":true},
            "metricTypeAltLabel": {"dataType":"string","required":true},
            "metricTypeIsSummary": {"dataType":"string","required":true},
            "areaIdentifier": {"dataType":"string","required":true},
            "areaLabel": {"dataType":"string","required":true},
            "areaAltLabel": {"dataType":"string","required":true},
            "areaIsSummary": {"dataType":"string","required":true},
            "periodIdentifier": {"dataType":"string","required":true},
            "periodLabel": {"dataType":"string","required":true},
            "periodAltLabel": {"dataType":"string","required":true},
            "periodIsSummary": {"dataType":"string","required":true},
            "valueTypeIdentifier": {"dataType":"string","required":true},
            "valueTypeLabel": {"dataType":"string","required":true},
            "valueTypeIsSummary": {"dataType":"string","required":true},
            "value": {"dataType":"double","required":true},
            "source": {"dataType":"double","required":true},
            "formatted": {"dataType":"string","required":true},
            "format": {"dataType":"string","required":true},
            "publicationStatus": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Dataset": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDataSetGetResponse": {
        "dataType": "refObject",
        "properties": {
            "dataset-array": {"dataType":"array","array":{"dataType":"refObject","ref":"Dataset"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApplicableAreaType": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "shortLabel": {"dataType":"string","required":true},
            "longLabel": {"dataType":"string","required":true},
            "isGroup": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CollectionVerbose": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "url": {"dataType":"string","required":true},
            "isLocalCollectionRequired": {"dataType":"boolean","required":true},
            "sourceName": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MeasurementUnit": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "shortLabel": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Measure": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "dataset": {"ref":"Dataset","required":true},
            "measurementUnit": {"ref":"MeasurementUnit","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DatasetVerbose": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "isSpecificToOrganisation": {"dataType":"boolean","required":true},
            "applicableAreaTypes": {"dataType":"array","array":{"dataType":"refObject","ref":"ApplicableAreaType"},"required":true},
            "collection": {"ref":"CollectionVerbose","required":true},
            "measures": {"dataType":"array","array":{"dataType":"refObject","ref":"Measure"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDataSetVerboseGetResponse": {
        "dataType": "refObject",
        "properties": {
            "dataset-array": {"dataType":"array","array":{"dataType":"refObject","ref":"DatasetVerbose"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDataSetIdentifierGetResponse": {
        "dataType": "refObject",
        "properties": {
            "dataset-array": {"dataType":"array","array":{"dataType":"refObject","ref":"DatasetVerbose"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Replace": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "url": {"dataType":"string","required":true},
            "isLocalCollectionRequired": {"dataType":"boolean","required":true},
            "sourceName": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DatasetCollection": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "url": {"dataType":"string","required":true},
            "isLocalCollectionRequired": {"dataType":"boolean","required":true},
            "sourceName": {"dataType":"string","required":true},
            "replaces": {"dataType":"array","array":{"dataType":"refObject","ref":"Replace"},"required":true},
            "replacedBy": {"dataType":"array","array":{"dataType":"refObject","ref":"Replace"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDataSetCollectionGetResponse": {
        "dataType": "refObject",
        "properties": {
            "datasetCollection-array": {"dataType":"array","array":{"dataType":"refObject","ref":"DatasetCollection"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDataSetCollectionVerboseGetResponse": {
        "dataType": "refObject",
        "properties": {
            "datasetCollection-array": {"dataType":"array","array":{"dataType":"refObject","ref":"DatasetCollection"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDataSetCollectionIdentifierGetResponse": {
        "dataType": "refObject",
        "properties": {
            "datasetCollection": {"ref":"DatasetCollection","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DimensionMember": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDimensionMemberGetResponse": {
        "dataType": "refObject",
        "properties": {
            "dimensionMember-array": {"dataType":"array","array":{"dataType":"refObject","ref":"DimensionMember"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Dimension": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DimensionMembersVerbose": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "dimension": {"ref":"Dimension","required":true},
            "isDefaultMember": {"dataType":"boolean","required":true},
            "description": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDimensionMemberVerboseGetResponse": {
        "dataType": "refObject",
        "properties": {
            "dimensionMember-array": {"dataType":"array","array":{"dataType":"refObject","ref":"DimensionMembersVerbose"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDimensionMembersIdentifierGetResponse": {
        "dataType": "refObject",
        "properties": {
            "dimensionMember": {"ref":"DimensionMembersVerbose","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDimensionsGetResponse": {
        "dataType": "refObject",
        "properties": {
            "dimension-array": {"dataType":"array","array":{"dataType":"refObject","ref":"Dimension"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DimensionVerbose": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "canBeSummedToAWhole": {"dataType":"boolean","required":true},
            "dimensionMembers": {"dataType":"array","array":{"dataType":"refObject","ref":"DimensionMember"},"required":true},
            "description": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDimensionsVerboseGetResponse": {
        "dataType": "refObject",
        "properties": {
            "dimension-array": {"dataType":"array","array":{"dataType":"refObject","ref":"DimensionVerbose"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDimensionsIdentifierGetResponse": {
        "dataType": "refObject",
        "properties": {
            "dimension": {"ref":"DimensionVerbose","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Areas": {
        "dataType": "refObject",
        "properties": {
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Capitalisation": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "index": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RankedOptions": {
        "dataType": "refObject",
        "properties": {
            "label": {"ref":"Capitalisation","required":true},
            "short-label": {"ref":"Capitalisation","required":true},
            "lower-case-label": {"ref":"Capitalisation","required":true},
            "value": {"ref":"Capitalisation","required":true},
            "value-with-units": {"ref":"Capitalisation","required":true},
            "percent": {"ref":"Capitalisation","required":true},
            "long-area-label": {"ref":"Capitalisation"},
            "value-with-full-derivation": {"ref":"Capitalisation","required":true},
            "value-with-units-full-derivation": {"ref":"Capitalisation","required":true},
            "dimension-label": {"ref":"Capitalisation"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MetadataOptions": {
        "dataType": "refObject",
        "properties": {
            "label": {"ref":"Capitalisation","required":true},
            "short-label": {"ref":"Capitalisation","required":true},
            "source": {"ref":"Capitalisation","required":true},
            "identifier": {"ref":"Capitalisation","required":true},
            "collection": {"ref":"Capitalisation","required":true},
            "help-text": {"ref":"Capitalisation","required":true},
            "formatted-help-text": {"ref":"Capitalisation","required":true},
            "polarity": {"ref":"Capitalisation","required":true},
            "data-last-updated": {"ref":"Capitalisation","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EquivalentOptionsClass": {
        "dataType": "refObject",
        "properties": {
            "value": {"ref":"Capitalisation","required":true},
            "value-with-units": {"ref":"Capitalisation","required":true},
            "period-label": {"ref":"Capitalisation","required":true},
            "degree-of-fit": {"ref":"Capitalisation","required":true},
            "value-with-full-derivation": {"ref":"Capitalisation","required":true},
            "value-with-units-full-derivation": {"ref":"Capitalisation","required":true},
            "full-derivation": {"ref":"Capitalisation","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DerivedOptionsClass": {
        "dataType": "refObject",
        "properties": {
            "value": {"ref":"Capitalisation","required":true},
            "value-with-units": {"ref":"Capitalisation"},
            "value-with-full-derivation": {"ref":"Capitalisation","required":true},
            "value-with-units-full-derivation": {"ref":"Capitalisation","required":true},
            "full-derivation": {"ref":"Capitalisation","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SummaryTypeReturnOptions": {
        "dataType": "refObject",
        "properties": {
            "value": {"ref":"Capitalisation","required":true},
            "value-with-units": {"ref":"Capitalisation","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LabelLengthOptions": {
        "dataType": "refObject",
        "properties": {
            "label": {"ref":"Capitalisation","required":true},
            "short-label": {"ref":"Capitalisation","required":true},
            "long-label": {"ref":"Capitalisation","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LabelCaseOptions": {
        "dataType": "refObject",
        "properties": {
            "case": {"ref":"Capitalisation","required":true},
            "plural": {"ref":"Capitalisation","required":true},
            "both": {"ref":"Capitalisation","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CapitalisationOptions": {
        "dataType": "refObject",
        "properties": {
            "capitalisation": {"ref":"Capitalisation","required":true},
            "nocaps": {"ref":"Capitalisation","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Data": {
        "dataType": "refObject",
        "properties": {
            "areas-fixed": {"ref":"Areas","required":true},
            "areas-relative": {"ref":"Areas","required":true},
            "ranked-metric-type-options": {"ref":"RankedOptions","required":true},
            "ranked-area-options": {"ref":"RankedOptions","required":true},
            "metadata-options": {"ref":"MetadataOptions","required":true},
            "metric-value-options": {"ref":"EquivalentOptionsClass","required":true},
            "equivalent-options": {"ref":"EquivalentOptionsClass","required":true},
            "derived-options": {"ref":"DerivedOptionsClass","required":true},
            "percent-options": {"ref":"DerivedOptionsClass","required":true},
            "summary-type-options": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"ref":"Capitalisation"},"required":true},
            "summary-type-return-options": {"ref":"SummaryTypeReturnOptions","required":true},
            "value-type-options": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"ref":"Capitalisation"},"required":true},
            "value-type-derived-options": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"ref":"Capitalisation"},"required":true},
            "label-length-options": {"ref":"LabelLengthOptions","required":true},
            "label-case-options": {"ref":"LabelCaseOptions","required":true},
            "capitalisation-options": {"ref":"CapitalisationOptions","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TabType": {
        "dataType": "refEnum",
        "enums": ["Fields","Function"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FieldArray": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string"},
            "label": {"dataType":"string","required":true},
            "hint": {"dataType":"string"},
            "options": {"dataType":"string","required":true},
            "default": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TabArray": {
        "dataType": "refObject",
        "properties": {
            "identifier": {"dataType":"string","required":true},
            "label": {"dataType":"string","required":true},
            "index": {"dataType":"double","required":true},
            "tab-type": {"ref":"TabType","required":true},
            "description": {"dataType":"string","required":true},
            "field-array": {"dataType":"array","array":{"dataType":"refObject","ref":"FieldArray"},"required":true},
            "output-text": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TextTokenConfiguration": {
        "dataType": "refObject",
        "properties": {
            "data": {"ref":"Data","required":true},
            "tab-array": {"dataType":"array","array":{"dataType":"refObject","ref":"TabArray"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IEditorConfigGetResponse": {
        "dataType": "refObject",
        "properties": {
            "text-token-configuration": {"ref":"TextTokenConfiguration","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Source": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TextTokenFieldList": {
        "dataType": "refObject",
        "properties": {
            "source": {"dataType":"array","array":{"dataType":"refObject","ref":"Source"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IEditorFieldsGetResponse": {
        "dataType": "refObject",
        "properties": {
            "text-token-field-list": {"ref":"TextTokenFieldList","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SourceFunction": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "syntax": {"dataType":"string","required":true},
            "requiredParameters": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "examples": {"dataType":"array","array":{"dataType":"string"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TextTokenFunctionList": {
        "dataType": "refObject",
        "properties": {
            "source": {"dataType":"array","array":{"dataType":"refObject","ref":"SourceFunction"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IEditorFunctionGetResponse": {
        "dataType": "refObject",
        "properties": {
            "text-token-function-list": {"ref":"TextTokenFunctionList","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.get('/v1/areas',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function AreaController_getArea(request: any, response: any, next: any) {
            const args = {
                    applicableToMetricType: {"in":"query","name":"applicableToMetricType","dataType":"string"},
                    area: {"in":"query","name":"area","dataType":"string"},
                    areaType: {"in":"query","name":"areaType","dataType":"string"},
                    lat: {"in":"query","name":"lat","dataType":"string"},
                    lon: {"in":"query","name":"lon","dataType":"string"},
                    pageNumber: {"in":"query","name":"pageNumber","dataType":"string"},
                    pageSize: {"in":"query","name":"pageSize","dataType":"string"},
                    searchText: {"in":"query","name":"searchText","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new AreaController();


            const promise = controller.getArea.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/areas/:identifier',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function AreaController_getAreaIdentifier(request: any, response: any, next: any) {
            const args = {
                    identifier: {"in":"path","name":"identifier","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new AreaController();


            const promise = controller.getAreaIdentifier.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/areas/:identifier/bounds',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function AreaController_getAreaIdentifierBounds(request: any, response: any, next: any) {
            const args = {
                    identifier: {"in":"path","name":"identifier","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new AreaController();


            const promise = controller.getAreaIdentifierBounds.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/areaTypes',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function AreaTypesController_getAreaTypes(request: any, response: any, next: any) {
            const args = {
                    area: {"in":"query","name":"area","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new AreaTypesController();


            const promise = controller.getAreaTypes.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/areaTypes/current',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function AreaTypesController_getAreaTypesCurrent(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new AreaTypesController();


            const promise = controller.getAreaTypesCurrent.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/areaTypes/filter-data',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function AreaTypesController_getAreaTypesFilterData(request: any, response: any, next: any) {
            const args = {
                    metricType: {"in":"query","name":"metricType","dataType":"string"},
                    period: {"in":"query","name":"period","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new AreaTypesController();


            const promise = controller.getAreaTypesFilterData.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/areaTypes/verbose',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function AreaTypesController_getAreaTypesVerbose(request: any, response: any, next: any) {
            const args = {
                    isMain: {"in":"query","name":"isMain","dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new AreaTypesController();


            const promise = controller.getAreaTypesVerbose.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/areaTypes/:identifier',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function AreaTypesController_getAreaTypesWithIdentifier(request: any, response: any, next: any) {
            const args = {
                    identifier: {"in":"path","name":"identifier","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new AreaTypesController();


            const promise = controller.getAreaTypesWithIdentifier.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/bounds',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function BoundController_getBounds(request: any, response: any, next: any) {
            const args = {
                    area: {"in":"query","name":"area","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new BoundController();


            const promise = controller.getBounds.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/calculationMethods',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function CalculationMethodController_getCalculationMethod(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new CalculationMethodController();


            const promise = controller.getCalculationMethod.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/calculationMethods/verbose',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function CalculationMethodController_getCalculationMethodsVerbose(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new CalculationMethodController();


            const promise = controller.getCalculationMethodsVerbose.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/calculationMethods/:identifier',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function CalculationMethodController_getCalculationMethodsIdentifier(request: any, response: any, next: any) {
            const args = {
                    identifier: {"in":"path","name":"identifier","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new CalculationMethodController();


            const promise = controller.getCalculationMethodsIdentifier.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/calculationPeriodTypeRules',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function CalculationPeriodTypeRulesController_getCalculationPeriodTypeRules(request: any, response: any, next: any) {
            const args = {
                    denominatorPeriodType: {"in":"query","name":"denominatorPeriodType","dataType":"string"},
                    numeratorPeriodType: {"in":"query","name":"numeratorPeriodType","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new CalculationPeriodTypeRulesController();


            const promise = controller.getCalculationPeriodTypeRules.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/clientApplications',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function ClientApplicationController_getClientApplication(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new ClientApplicationController();


            const promise = controller.getClientApplication.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/clientApplications/verbose',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function ClientApplicationController_getClientApplicationVerbose(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new ClientApplicationController();


            const promise = controller.getClientApplicationVerbose.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/clientApplications/:identifier',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function ClientApplicationController_getClientApplicationIdentifier(request: any, response: any, next: any) {
            const args = {
                    identifier: {"in":"path","name":"identifier","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new ClientApplicationController();


            const promise = controller.getClientApplicationIdentifier.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/comparisonGroups',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function ComparisonGroupsController_getComparisonGroup(request: any, response: any, next: any) {
            const args = {
                    mainOnly: {"in":"query","name":"mainOnly","dataType":"string"},
                    memberArea: {"in":"query","name":"memberArea","dataType":"string"},
                    ownerArea: {"in":"query","name":"ownerArea","dataType":"string"},
                    type: {"in":"query","name":"type","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new ComparisonGroupsController();


            const promise = controller.getComparisonGroup.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/comparisonGroups/:identifier',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function ComparisonGroupsController_getComparisonGroupIdentifier(request: any, response: any, next: any) {
            const args = {
                    identifier: {"in":"path","name":"identifier","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new ComparisonGroupsController();


            const promise = controller.getComparisonGroupIdentifier.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/comparisonGroups/:identifier/bounds',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function ComparisonGroupsController_getComparisonGroupIdentifierBounds(request: any, response: any, next: any) {
            const args = {
                    identifier: {"in":"path","name":"identifier","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new ComparisonGroupsController();


            const promise = controller.getComparisonGroupIdentifierBounds.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/comparisonGroupTypes',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function ComparisonGroupTypesController_getComparisonGroupTypes(request: any, response: any, next: any) {
            const args = {
                    memberArea: {"in":"query","name":"memberArea","dataType":"string"},
                    ownerArea: {"in":"query","name":"ownerArea","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new ComparisonGroupTypesController();


            const promise = controller.getComparisonGroupTypes.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/comparisonGroupTypes/verbose',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function ComparisonGroupTypesController_getComparisonGroupTypesVerbose(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new ComparisonGroupTypesController();


            const promise = controller.getComparisonGroupTypesVerbose.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/comparisonGroupTypes/:identifier',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function ComparisonGroupTypesController_getComparisonGroupTypesIdentifier(request: any, response: any, next: any) {
            const args = {
                    identifier: {"in":"path","name":"identifier","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new ComparisonGroupTypesController();


            const promise = controller.getComparisonGroupTypesIdentifier.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/data',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function DataController_getData(request: any, response: any, next: any) {
            const args = {
                    metricType: {"in":"query","name":"metricType","required":true,"dataType":"string"},
                    period: {"in":"query","name":"period","required":true,"dataType":"string"},
                    area: {"in":"query","name":"area","required":true,"dataType":"string"},
                    columnGrouping: {"in":"query","name":"columnGrouping","dataType":"string"},
                    headerCellType: {"in":"query","name":"headerCellType","dataType":"string"},
                    includeMissing: {"in":"query","name":"includeMissing","dataType":"string"},
                    outputType: {"in":"query","name":"outputType","dataType":"string"},
                    rowGrouping: {"in":"query","name":"rowGrouping","dataType":"string"},
                    summary: {"in":"query","name":"summary","dataType":"string"},
                    valueType: {"in":"query","name":"valueType","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DataController();


            const promise = controller.getData.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/data/regression',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function DataController_getDataRegression(request: any, response: any, next: any) {
            const args = {
                    metricType: {"in":"query","name":"metricType","required":true,"dataType":"string"},
                    period: {"in":"query","name":"period","required":true,"dataType":"string"},
                    area: {"in":"query","name":"area","required":true,"dataType":"string"},
                    columnGrouping: {"in":"query","name":"columnGrouping","dataType":"string"},
                    headerCellType: {"in":"query","name":"headerCellType","dataType":"string"},
                    includeMissing: {"in":"query","name":"includeMissing","dataType":"string"},
                    outputType: {"in":"query","name":"outputType","dataType":"string"},
                    rowGrouping: {"in":"query","name":"rowGrouping","dataType":"string"},
                    summary: {"in":"query","name":"summary","dataType":"string"},
                    valueType: {"in":"query","name":"valueType","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DataController();


            const promise = controller.getDataRegression.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/data/data.table',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function DataController_getDataTable(request: any, response: any, next: any) {
            const args = {
                    area: {"in":"query","name":"area","required":true,"dataType":"string"},
                    period: {"in":"query","name":"period","required":true,"dataType":"string"},
                    metricType: {"in":"query","name":"metricType","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DataController();


            const promise = controller.getDataTable.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/datasets',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function DataSetController_getDataSet(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DataSetController();


            const promise = controller.getDataSet.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/datasets/verbose',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function DataSetController_getDataSetVerbose(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DataSetController();


            const promise = controller.getDataSetVerbose.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/datasets/:identifier',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function DataSetController_getDataSetIdentifier(request: any, response: any, next: any) {
            const args = {
                    identifier: {"in":"path","name":"identifier","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DataSetController();


            const promise = controller.getDataSetIdentifier.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/datasetCollections',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function DataSetCollectionController_getDataSetCollection(request: any, response: any, next: any) {
            const args = {
                    filterOff: {"in":"query","name":"filterOff","dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DataSetCollectionController();


            const promise = controller.getDataSetCollection.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/datasetCollections/verbose',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function DataSetCollectionController_getDataSetCollectionVerbose(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DataSetCollectionController();


            const promise = controller.getDataSetCollectionVerbose.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/datasetCollections/:identifier',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function DataSetCollectionController_getDataSetCollectionIdentifier(request: any, response: any, next: any) {
            const args = {
                    identifier: {"in":"path","name":"identifier","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DataSetCollectionController();


            const promise = controller.getDataSetCollectionIdentifier.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/derivation',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function DerivationController_getDerivation(request: any, response: any, next: any) {
            const args = {
                    area: {"in":"query","name":"area","required":true,"dataType":"string"},
                    metricType: {"in":"query","name":"metricType","required":true,"dataType":"double"},
                    period: {"in":"query","name":"period","required":true,"dataType":"string"},
                    customBands: {"in":"query","name":"customBands","dataType":"string"},
                    organisationID: {"in":"query","name":"organisationID","dataType":"string"},
                    outputType: {"in":"query","name":"outputType","dataType":"string"},
                    valueType: {"in":"query","name":"valueType","dataType":"string"},
                    virtualMetricTypeDenominator: {"in":"query","name":"virtualMetricType.denominator","dataType":"string"},
                    virtualMetricTypeLabel: {"in":"query","name":"virtualMetricType.label","dataType":"string"},
                    virtualMetricTypeMultiple: {"in":"query","name":"virtualMetricType.multiple","dataType":"string"},
                    virtualMetricTypeNumerator: {"in":"query","name":"virtualMetricType.numerator","dataType":"string"},
                    withArea: {"in":"query","name":"withArea","dataType":"string"},
                    withPeriod: {"in":"query","name":"withPeriod","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DerivationController();


            const promise = controller.getDerivation.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/dimensionMembers',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function DimensionMembersController_getDimensionMembers(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DimensionMembersController();


            const promise = controller.getDimensionMembers.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/dimensionMembers/verbose',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function DimensionMembersController_getDimensionMembersVerbose(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DimensionMembersController();


            const promise = controller.getDimensionMembersVerbose.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/dimensionMembers/:identifier',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function DimensionMembersController_getDimensionMembersIdentifier(request: any, response: any, next: any) {
            const args = {
                    identifier: {"in":"path","name":"identifier","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DimensionMembersController();


            const promise = controller.getDimensionMembersIdentifier.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/dimensions',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function DimensionsController_getDimensions(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DimensionsController();


            const promise = controller.getDimensions.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/dimensions/verbose',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function DimensionsController_getDimensionsVerbose(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DimensionsController();


            const promise = controller.getDimensionsVerbose.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/dimensions/:identifier',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function DimensionsController_getDimensionsIdentifier(request: any, response: any, next: any) {
            const args = {
                    identifier: {"in":"path","name":"identifier","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new DimensionsController();


            const promise = controller.getDimensionsIdentifier.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/editor/config',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function EditorConfigController_getEditorConfig(request: any, response: any, next: any) {
            const args = {
                    area: {"in":"query","name":"area","dataType":"string"},
                    areaTypeMax: {"in":"query","name":"areaTypeMax","dataType":"string"},
                    authorityArea: {"in":"query","name":"authorityArea","dataType":"string"},
                    childArea: {"in":"query","name":"childArea","dataType":"string"},
                    comparisonGroup: {"in":"query","name":"comparisonGroup","dataType":"string"},
                    includeChildArea: {"in":"query","name":"includeChildArea","dataType":"string"},
                    latestPeriod: {"in":"query","name":"latestPeriod","dataType":"string"},
                    metricDimension: {"in":"query","name":"metricDimension","dataType":"string"},
                    metricType: {"in":"query","name":"metricType","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new EditorConfigController();


            const promise = controller.getEditorConfig.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/editor/fields',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function EditorConfigController_getEditorFields(request: any, response: any, next: any) {
            const args = {
                    area: {"in":"query","name":"area","dataType":"string"},
                    areaTypeMax: {"in":"query","name":"areaTypeMax","dataType":"string"},
                    authorityArea: {"in":"query","name":"authorityArea","dataType":"string"},
                    childArea: {"in":"query","name":"childArea","dataType":"string"},
                    comparisonGroup: {"in":"query","name":"comparisonGroup","dataType":"string"},
                    includeChildArea: {"in":"query","name":"includeChildArea","dataType":"string"},
                    latestPeriod: {"in":"query","name":"latestPeriod","dataType":"string"},
                    metricDimension: {"in":"query","name":"metricDimension","dataType":"string"},
                    metricType: {"in":"query","name":"metricType","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new EditorConfigController();


            const promise = controller.getEditorFields.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/v1/editor/functions',
            authenticateMiddleware([{"apiKeyAuth":[]}]),

            function EditorConfigController_getEditorFunction(request: any, response: any, next: any) {
            const args = {
                    area: {"in":"query","name":"area","dataType":"string"},
                    areaTypeMax: {"in":"query","name":"areaTypeMax","dataType":"string"},
                    authorityArea: {"in":"query","name":"authorityArea","dataType":"string"},
                    childArea: {"in":"query","name":"childArea","dataType":"string"},
                    comparisonGroup: {"in":"query","name":"comparisonGroup","dataType":"string"},
                    includeChildArea: {"in":"query","name":"includeChildArea","dataType":"string"},
                    latestPeriod: {"in":"query","name":"latestPeriod","dataType":"string"},
                    metricDimension: {"in":"query","name":"metricDimension","dataType":"string"},
                    metricType: {"in":"query","name":"metricType","dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
            } catch (err) {
                return next(err);
            }

            const controller = new EditorConfigController();


            const promise = controller.getEditorFunction.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, undefined, next);
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function authenticateMiddleware(security: TsoaRoute.Security[] = []) {
        return async function runAuthenticationMiddleware(request: any, _response: any, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            // keep track of failed auth attempts so we can hand back the most
            // recent one.  This behavior was previously existing so preserving it
            // here
            const failedAttempts: any[] = [];
            const pushAndRethrow = (error: any) => {
                failedAttempts.push(error);
                throw error;
            };

            const secMethodOrPromises: Promise<any>[] = [];
            for (const secMethod of security) {
                if (Object.keys(secMethod).length > 1) {
                    const secMethodAndPromises: Promise<any>[] = [];

                    for (const name in secMethod) {
                        secMethodAndPromises.push(
                            expressAuthentication(request, name, secMethod[name])
                                .catch(pushAndRethrow)
                        );
                    }

                    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                    secMethodOrPromises.push(Promise.all(secMethodAndPromises)
                        .then(users => { return users[0]; }));
                } else {
                    for (const name in secMethod) {
                        secMethodOrPromises.push(
                            expressAuthentication(request, name, secMethod[name])
                                .catch(pushAndRethrow)
                        );
                    }
                }
            }

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            try {
                request['user'] = await promiseAny(secMethodOrPromises);
                next();
            }
            catch(err) {
                // Show most recent error as response
                const error = failedAttempts.pop();
                error.status = error.status || 401;
                next(error);
            }

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, response: any, successStatus: any, next: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode = successStatus;
                let headers;
                if (isController(controllerObj)) {
                    headers = controllerObj.getHeaders();
                    statusCode = controllerObj.getStatus() || statusCode;
                }

                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                returnHandler(response, statusCode, data, headers)
            })
            .catch((error: any) => next(error));
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function returnHandler(response: any, statusCode?: number, data?: any, headers: any = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        } else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        } else {
            response.status(statusCode || 204).end();
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function responder(response: any): TsoaResponse<HttpStatusCodeLiteral, unknown>  {
        return function(status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, request: any, response: any): any[] {
        const fieldErrors: FieldErrors  = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    }
                case 'res':
                    return responder(response);
            }
        });

        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
