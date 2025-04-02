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
