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

  seriesData: DataPoint[] = [
    {name: 'USA', value: [
      { name: '2010', value: 331002651 },
      { name: '2011', value: 1439323776 }
    ]},
    {name: 'China', value: [
      { name: '2010', value: 1380004385 },
      { name: '2011', value: 83783942 }
    ]}
  ]
}