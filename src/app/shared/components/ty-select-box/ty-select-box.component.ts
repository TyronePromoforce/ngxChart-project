import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ty-select-box',
  imports: [],
  templateUrl: './ty-select-box.component.html',
  styleUrl: './ty-select-box.component.scss'
})
export class TySelectBoxComponent {

  @Input() label: string = '';
  @Input() data: any[]= [];

  constructor() { }

}
