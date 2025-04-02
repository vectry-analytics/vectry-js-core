import { ITransport } from './ITransport';

export interface IServiceArguments {
  transport: ITransport;
  organizationId?: string;
}
