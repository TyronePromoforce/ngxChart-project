import { Component } from '@angular/core';
import { SingleBarComponent } from "../charts/single-bar/single-bar.component";
import { LineComponent } from "../charts/line/line.component";
import { PieComponent } from "../charts/pie/pie.component";
import { DataService } from '../data/data.service';
import { DataChecker, GraphData } from '../shared/models/graph-models';

@Component({
  selector: 'app-home',
  imports: [SingleBarComponent, LineComponent, PieComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  data: GraphData = DataChecker.EmptyGraphData;
  dataSeries: GraphData = DataChecker.EmptyGraphData;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.data = {
      xAxisName: "Country",
      yAxisName: "Population",
      Data: this.dataService.data,
      GraphName: "Population by Country"
    };

    this.dataSeries = {
      xAxisName: "Country",
      yAxisName: "Population",
      Data: this.dataService.seriesData,
      GraphName: "Population by Country"
    }
  }

}
