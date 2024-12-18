/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/testMappers";
import * as Parameters from "../models/parameters";
import { TestServiceClientContext } from "../testServiceClientContext";

/** Class representing a Test. */
export class Test {
  private readonly client: TestServiceClientContext;

  /**
   * Create a Test.
   * @param {TestServiceClientContext} client Reference to the service client.
   */
  constructor(client: TestServiceClientContext) {
    this.client = client;
  }

  /**
   * Get test.
   * @param [options] The optional parameters
   * @returns Promise<Models.TestGetResponse>
   */
  get(options?: msRest.RequestOptionsBase): Promise<Models.TestGetResponse>;
  /**
   * @param callback The callback
   */
  get(callback: msRest.ServiceCallback<Models.TestGetResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  get(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TestGetResult>): void;
  get(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TestGetResult>, callback?: msRest.ServiceCallback<Models.TestGetResult>): Promise<Models.TestGetResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TestGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.TestService/test",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TestGetResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
