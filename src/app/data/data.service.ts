import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
  constructor() {}

  data = [
    { name: 'USA', value: 331002651 },
    { name: 'China', value: 1439323776 },
    { name: 'India', value: 1380004385 },
    { name: 'Germany', value: 83783942 },
    { name: 'UK', value: 67886011 }
  ];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
}