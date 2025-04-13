export interface Status {
  id: number;
  name: string;
  title: string;
}

export interface Metadata {
  [key: string]: any;
}

export interface Context {
  [key: string]: any;
}

export interface AuditInfo {
  user?: { id: any };
  timestamp?: string;
}

export interface BaseModel {
  id: string;
  created: AuditInfo;
  modified?: AuditInfo;
  deleted?: AuditInfo;
  status: Status;
  metadata?: Metadata;
  context?: Context;
  [key: string]: any;
}
