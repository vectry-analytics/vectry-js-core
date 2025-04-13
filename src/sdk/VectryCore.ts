import { ITransport, VectryConfig } from '../interfaces';
import { capture as coreCapture } from '../core/capture';
import {
  AnomalyService,
  CausalThreadService,
  EventExplanationService,
  EventService,
  TraceService
} from '../services';
import { setRuntimeConfig } from '../config/runtimeConfig';
import { defaultConfig } from '../config/defaultConfig';
import { detectMutation } from '../utils';

export class VectryCore {
  private transport: ITransport | undefined;
  public organizationId?: string;

  public event: EventService;
  public trace: TraceService;
  public thread: CausalThreadService;
  public eventExplanation: EventExplanationService;
  public anomaly: AnomalyService;

  constructor(args: VectryConfig) {
    this.transport = args.transport;
    this.organizationId = args.organizationId;

    setRuntimeConfig({
      ...defaultConfig,
      ...args
    });

    this.event = new EventService({ transport: this.transport } as VectryConfig);
    this.trace = new TraceService({ transport: this.transport } as VectryConfig);
    this.thread = new CausalThreadService({ transport: this.transport } as VectryConfig);
    this.eventExplanation = new EventExplanationService({ transport: this.transport } as VectryConfig);
    this.anomaly = new AnomalyService({ transport: this.transport } as VectryConfig);
  }

  /**
   * Captures a raw event and sends it to Vectry using the core handler.
   * Automatically enriches, validates, and dispatches the event.
   */
  async capture(event: any) {
    if (!event) {
      throw new Error('Event cannot be null or undefined');
    }

    return coreCapture(event);
  }

  static detectMutation = detectMutation;
}
