import {Component, Input, OnInit} from '@angular/core';
import {DimensionsService} from "../../../services/dimensions/dimensions.service";
import {CellsService, Grid} from "../../../services/cells/cells.service";

@Component({
  selector: 'gof-cell-grid',
  templateUrl: './cell-grid.component.html',
  styleUrls: ['./cell-grid.component.scss']
})
export class CellGridComponent implements OnInit {

  @Input()
  cells: Grid = [['x', 'x'], [".", "."]];

  constructor(private readonly dimensionsService: DimensionsService, private readonly cellsService: CellsService) { }

  ngOnInit(): void {

  }

  reverseStatus(x: number, y: number) {
    this.cellsService.updateAt({x, y})
  }
}
