import { Component } from '@angular/core';
import { SingleBarComponent } from "../charts/single-bar/single-bar.component";
import { LineComponent } from "../charts/line/line.component";
import { PieComponent } from "../charts/pie/pie.component";

@Component({
  selector: 'app-home',
  imports: [SingleBarComponent, LineComponent, PieComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(){}

}
