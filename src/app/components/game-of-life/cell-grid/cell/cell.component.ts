import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cell} from "../../../../services/game-of-life/cells/cells.service";
import {STATUS} from "../../../../services/game-of-life/cells/utils/cells-utils";


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
