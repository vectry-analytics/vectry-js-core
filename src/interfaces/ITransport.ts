/**
 * ITransport
 *
 * Defines a transport layer interface used to send data from the SDK to a backend service.
 * This abstraction allows different transport mechanisms (HTTP, message queues, etc.)
 * without coupling the SDK to any specific implementation.
 */
export interface ITransport {
  /**
   * Performs a GET request to the specified backend path.
   *
   * @param path - The endpoint to query.
   * @param payload - Optional query parameters to include.
   *
   * @returns A Promise resolving with the fetched response.
   */
  get: <T = any>(path: string, payload?: any) => Promise<T>;

  /**
   * Performs a POST request to the specified backend path.
   *
   * @param path - The endpoint to post to.
   * @param payload - The data to send in the request body.
   *
   * @returns A Promise resolving with the server response.
   */
  post: <T = any>(path: string, payload?: any) => Promise<T>;

  /**
   * Performs a PUT request to the specified backend path.
   *
   * @param path - The endpoint to update.
   * @param payload - The data to update with.
   *
   * @returns A Promise resolving with the server response.
   */
  put: <T = any>(path: string, payload?: any) => Promise<T>;

  /**
   * Performs a PATCH request to the specified backend path.
   *
   * @param path - The endpoint to partially update.
   * @param payload - The data to patch.
   *
   * @returns A Promise resolving with the server response.
   */
  patch: <T = any>(path: string, payload?: any) => Promise<T>;

  /**
   * Performs a DELETE request to the specified backend path.
   *
   * @param path - The endpoint to delete.
   * @param payload - Optional data or query parameters.
   *
   * @returns A Promise resolving with the deletion result.
   */
  delete: <T = any>(path: string, payload?: any) => Promise<T>;
}
