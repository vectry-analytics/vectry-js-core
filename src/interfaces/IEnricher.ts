export interface IEnricher {
  (event: any): Promise<any> | any;
}