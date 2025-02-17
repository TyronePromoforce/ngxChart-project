import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DataChecker, DataPoint, GraphData } from '../../shared/models/graph-models';

@Component({
  selector: 'app-line',
  imports: [NgxChartsModule],
  templateUrl: './line.component.html',
  styleUrl: './line.component.scss'
})
export class LineComponent {

   @Input("GraphData") graphData: GraphData = DataChecker.EmptyGraphData;

   data: DataPoint[] = [];

   ngOnInit(): void {
    if(DataChecker.checkSingleSeries(this.graphData.Data)){
      this.data = this.graphData.Data.map((point) => {
        return { name: point.name, value: point.value as number };
      });
    }
  }
}
