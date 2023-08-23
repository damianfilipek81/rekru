/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://github.com/infinitered/ignite/blob/master/docs/Backend-API-Integration.md)
 * documentation for more details.
 */
import {
  ApiResponse, // @demo remove-current-line
  ApisauceInstance,
  create,
} from "apisauce"
import Config from "../../config"
import { GeneralApiProblem, getGeneralApiProblem } from "./apiProblem" // @demo remove-current-line
import { PostTypeSnapshotIn } from "app/models/Post"

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG = {
  url: Config.API_URL,
  timeout: 10000,
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance
  config: typeof DEFAULT_API_CONFIG

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
        ["x-api-key"]: "thisisapikey",
      },
    })
  }

  async getPosts(): Promise<{ posts: PostTypeSnapshotIn[] } | GeneralApiProblem> {
    // make the api call
    const response = await this.apisauce.get(`posts`)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      throw new Error(problem.kind || "error")
    }

    return response.data
  }

  async removePost(id: string): Promise<unknown> {
    const response = await this.apisauce.delete(`posts/${id}`)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      throw new Error(problem.kind || "error")
    }

    return response.data
  }
}

// Singleton instance of the API for convenience
export const api = new Api()
