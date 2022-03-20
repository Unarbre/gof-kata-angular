import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'gof-cell-line',
  templateUrl: './cell-line.component.html',
  styleUrls: ['./cell-line.component.scss']
})
export class CellLineComponent implements OnInit {

  @Input()
  cellLine: Array<string> = ["x", "x"];

  @Output()
  statusReversed: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  reverseStatus(index: number) {
    this.statusReversed.emit(index);
  }
}
