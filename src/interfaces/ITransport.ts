/**
 * ITransport
 *
 * Defines a transport layer interface used to send data from the SDK to a backend service.
 * This abstraction allows different transport mechanisms (HTTP, message queues, etc.)
 * without coupling the SDK to any specific implementation.
 */
export interface ITransport {
  /**
   * Sends the payload to the specified backend path.
   *
   * @param path - The relative path or endpoint to which the data should be sent (e.g. 'causal/observation/event').
   * @param payload - The data to be transmitted, typically a structured object like an Event or Trace.
   *
   * @returns A Promise that resolves once the payload has been successfully transmitted or rejects on error.
   */
  send: (path: string, payload: any) => Promise<void>;

  /**
   * Flushes any buffered data if the transport implementation supports batching.
   * This method is optional and only applicable when internal queuing is used.
   *
   * @returns A Promise that resolves when all buffered data is sent, or immediately if unsupported.
   */
  flush?: () => Promise<void>;
}
