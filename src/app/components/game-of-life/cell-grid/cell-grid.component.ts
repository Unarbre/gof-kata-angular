import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gof-cell-grid',
  templateUrl: './cell-grid.component.html',
  styleUrls: ['./cell-grid.component.scss']
})
export class CellGridComponent implements OnInit {


  @Input()
  cells: Array<Array<string>> = [['x', 'x']];

  @Input()
  length: number = 1;


  @Input()
  height: number = 1;

  constructor() { }

  ngOnInit(): void {

  }

}
