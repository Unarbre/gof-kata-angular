import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gof-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {


  @Input()
  status: string = "x";

  constructor() { }

  ngOnInit(): void {
  }

}
