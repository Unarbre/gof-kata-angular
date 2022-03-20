import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cell, STATUS} from "../../../../services/cells/cells.service";


@Component({
  selector: 'gof-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {


  @Input()
  status: Cell = STATUS.ALIVE;

  @Output()
  statusReversed: EventEmitter<void> = new EventEmitter<void>();



  constructor() {
  }

  ngOnInit(): void {
  }

  reverseStatus() {
    this.statusReversed.emit();
  }
}
