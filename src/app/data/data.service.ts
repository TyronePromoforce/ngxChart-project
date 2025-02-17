import { Injectable } from "@angular/core";
import { DataPoint } from "../shared/models/graph-models";

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor() {}

  data: DataPoint[] = [
    { name: 'USA', value: 331002651 },
    { name: 'China', value: 1439323776 },
    { name: 'India', value: 1380004385 },
    { name: 'Germany', value: 83783942 },
    { name: 'UK', value: 67886011 }
  ];
}