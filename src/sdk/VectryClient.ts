import { IServiceArguments, ITransport } from '../interfaces';
import { capture as coreCapture } from '../core/capture';
import {
  AnomalyService,
  CausalThreadService,
  EventExplanationService,
  EventService,
  TraceService
} from '../services';

export class VectryClient {
  private transport: ITransport;
  public organizationId?: string;

  public event: EventService;
  public trace: TraceService;
  public thread: CausalThreadService;
  public eventExplanation: EventExplanationService;
  public anomaly: AnomalyService;

  constructor({ transport, organizationId }: IServiceArguments) {
    this.transport = transport;
    this.organizationId = organizationId;

    this.event = new EventService({ transport: this.transport });
    this.trace = new TraceService({ transport: this.transport });
    this.thread = new CausalThreadService({ transport: this.transport });
    this.eventExplanation = new EventExplanationService({ transport: this.transport });
    this.anomaly = new AnomalyService({ transport: this.transport });
  }

  /**
   * Captures a raw event and sends it to Vectry using the core handler.
   * Automatically enriches, validates, and dispatches the event.
   */
  async capture(event: any) {
    const enriched = {
      ...event,
      organization_id: this.organizationId
    };

    return coreCapture(enriched);
  }
}
