import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import reject from "ramda/es/reject"
import { createError } from '../../utils/';
import { getGeneralApiProblem } from './api-problem';

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

/**
 * TODO: Could be better ! Refactor it soon!
 */

async get(partialURL): Promise<any> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(partialURL)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
      return response
    } catch (error) {
      reject(createError(error))
    }
  }

  async post(partialURL, data): Promise<any> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.post(partialURL, data)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
      return response
    } catch (error) {
      reject(createError(error))
    }
  }

  async put(partialURL, data): Promise<any> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.put(partialURL, data)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
      return response
    } catch (error) {
      reject(createError(error))
    }
  }

  async delete(partialURL, data): Promise<any> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.delete(partialURL, data)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
      return response
    } catch (error) {
      reject(createError(error))
    }
  }
}
