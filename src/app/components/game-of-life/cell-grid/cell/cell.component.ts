import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CellsService, STATUS} from "../../../../services/cells/cells.service";




@Component({
  selector: 'gof-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {


  @Input()
  status: string = STATUS.ALIVE;

  @Output()
  statusReversed: EventEmitter<void> = new EventEmitter<void>();



  constructor(private readonly cellsService : CellsService) {
  }

  ngOnInit(): void {
  }

  reverseStatus() {
    this.statusReversed.emit();
  }
}
