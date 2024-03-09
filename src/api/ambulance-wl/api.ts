/* tslint:disable */
/* eslint-disable */
/**
 * Waiting List Api
 * Ambulance Waiting List management for Web-In-Cloud system
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xschmidtd@stuba.sk
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * Describes disease, symptoms, or other reasons of patient   visit
 * @export
 * @interface Condition
 */
export interface Condition {
    /**
     * 
     * @type {string}
     * @memberof Condition
     */
    'value': string;
    /**
     * 
     * @type {string}
     * @memberof Condition
     */
    'code'?: string;
    /**
     * Link to encyclopedical explanation of the patient\'s condition
     * @type {string}
     * @memberof Condition
     */
    'reference'?: string;
    /**
     * 
     * @type {number}
     * @memberof Condition
     */
    'typicalDurationMinutes'?: number;
}
/**
 * 
 * @export
 * @interface WaitingListEntry
 */
export interface WaitingListEntry {
    /**
     * Unique id of the entry in this waiting list
     * @type {string}
     * @memberof WaitingListEntry
     */
    'id': string;
    /**
     * Name of patient in waiting list
     * @type {string}
     * @memberof WaitingListEntry
     */
    'name'?: string;
    /**
     * Unique identifier of the patient known to Web-In-Cloud system
     * @type {string}
     * @memberof WaitingListEntry
     */
    'patientId': string;
    /**
     * Timestamp since when the patient entered the waiting list
     * @type {string}
     * @memberof WaitingListEntry
     */
    'waitingSince': string;
    /**
     * Estimated time of entering ambulance. Ignored on post.
     * @type {string}
     * @memberof WaitingListEntry
     */
    'estimatedStart'?: string;
    /**
     * Estimated duration of ambulance visit. If not provided then it will be computed based on condition and ambulance settings
     * @type {number}
     * @memberof WaitingListEntry
     */
    'estimatedDurationMinutes': number;
    /**
     * 
     * @type {Condition}
     * @memberof WaitingListEntry
     */
    'condition'?: Condition;
}

/**
 * AmbulanceWaitingListApi - axios parameter creator
 * @export
 */
export const AmbulanceWaitingListApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * By using ambulanceId you get list of entries in ambulance waiting list
         * @summary Provides the ambulance waiting list
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWaitingListEntries: async (ambulanceId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ambulanceId' is not null or undefined
            assertParamExists('getWaitingListEntries', 'ambulanceId', ambulanceId)
            const localVarPath = `/waiting-list/{ambulanceId}/entries`
                .replace(`{${"ambulanceId"}}`, encodeURIComponent(String(ambulanceId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AmbulanceWaitingListApi - functional programming interface
 * @export
 */
export const AmbulanceWaitingListApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AmbulanceWaitingListApiAxiosParamCreator(configuration)
    return {
        /**
         * By using ambulanceId you get list of entries in ambulance waiting list
         * @summary Provides the ambulance waiting list
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWaitingListEntries(ambulanceId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<WaitingListEntry>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWaitingListEntries(ambulanceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AmbulanceWaitingListApi - factory interface
 * @export
 */
export const AmbulanceWaitingListApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AmbulanceWaitingListApiFp(configuration)
    return {
        /**
         * By using ambulanceId you get list of entries in ambulance waiting list
         * @summary Provides the ambulance waiting list
         * @param {string} ambulanceId pass the id of the particular ambulance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWaitingListEntries(ambulanceId: string, options?: any): AxiosPromise<Array<WaitingListEntry>> {
            return localVarFp.getWaitingListEntries(ambulanceId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AmbulanceWaitingListApi - interface
 * @export
 * @interface AmbulanceWaitingListApi
 */
export interface AmbulanceWaitingListApiInterface {
    /**
     * By using ambulanceId you get list of entries in ambulance waiting list
     * @summary Provides the ambulance waiting list
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceWaitingListApiInterface
     */
    getWaitingListEntries(ambulanceId: string, options?: AxiosRequestConfig): AxiosPromise<Array<WaitingListEntry>>;

}

/**
 * AmbulanceWaitingListApi - object-oriented interface
 * @export
 * @class AmbulanceWaitingListApi
 * @extends {BaseAPI}
 */
export class AmbulanceWaitingListApi extends BaseAPI implements AmbulanceWaitingListApiInterface {
    /**
     * By using ambulanceId you get list of entries in ambulance waiting list
     * @summary Provides the ambulance waiting list
     * @param {string} ambulanceId pass the id of the particular ambulance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AmbulanceWaitingListApi
     */
    public getWaitingListEntries(ambulanceId: string, options?: AxiosRequestConfig) {
        return AmbulanceWaitingListApiFp(this.configuration).getWaitingListEntries(ambulanceId, options).then((request) => request(this.axios, this.basePath));
    }
}


