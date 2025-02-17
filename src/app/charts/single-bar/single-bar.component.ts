import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-single-bar',
  imports: [NgxChartsModule],
  templateUrl: './single-bar.component.html',
  styleUrl: './single-bar.component.scss'
})
export class SingleBarComponent {

  colorScheme = {};
  data: { name: string; value: number; }[] = [];

  constructor( private dataService: DataService){}

  ngOnInit(): void {
    this.data = this.dataService.data;
  }

}
