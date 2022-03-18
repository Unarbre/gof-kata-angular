import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gof-cell-line',
  templateUrl: './cell-line.component.html',
  styleUrls: ['./cell-line.component.scss']
})
export class CellLineComponent implements OnInit {

  @Input()
  cellLine: Array<string> = ["x"];

  constructor() { }

  ngOnInit(): void {
  }

}
