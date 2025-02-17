import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DataChecker, DataPoint, GraphData } from '../../shared/models/graph-models';

@Component({
  selector: 'app-pie',
  imports: [NgxChartsModule],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.scss'
})
export class PieComponent {

   @Input("GraphData") graphData: GraphData = DataChecker.EmptyGraphData;
  
    colorScheme = {};
    data: DataPoint[] = [];
  
    constructor(){}
  
    ngOnInit(): void {
      if(DataChecker.checkSingleSeries(this.graphData.Data)){
        this.data = this.graphData.Data.map((point) => {
          return { name: point.name, value: point.value as number };
        });
      }
    }

}
