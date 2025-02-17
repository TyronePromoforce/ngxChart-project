import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DataService } from '../../data/data.service';
import { DataChecker, DataPoint, GraphData } from '../../shared/models/graph-models';

@Component({
  selector: 'app-single-bar',
  imports: [NgxChartsModule],
  templateUrl: './single-bar.component.html',
  styleUrl: './single-bar.component.scss'
})
export class SingleBarComponent {

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
