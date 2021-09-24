/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AreaController } from './../controllers/area.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AreaTypesController } from './../controllers/areatypes.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { BoundController } from './../controllers/bound.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CalculationMethodController } from './../controllers/calculationmethod.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CalculationPeriodTypeRulesController } from './../controllers/calculationperiodtyperules.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ClientApplicationController } from './../controllers/clientapplication.controller';
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
