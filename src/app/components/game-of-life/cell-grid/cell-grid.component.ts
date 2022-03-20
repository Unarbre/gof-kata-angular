import {Component, Input, OnInit} from '@angular/core';
import {DimensionsService} from "../../../services/dimensions/dimensions.service";
import {CellsService, Grid} from "../../../services/cells/cells.service";
import {STATUS} from "../../../services/cells/utils/cells-utils";

@Component({
  selector: 'gof-cell-grid',
  templateUrl: './cell-grid.component.html',
  styleUrls: ['./cell-grid.component.scss']
})
export class CellGridComponent implements OnInit {

  @Input()
  cells: Grid = [[STATUS.ALIVE, STATUS.ALIVE], [STATUS.DEAD, STATUS.DEAD]];

  constructor(private readonly dimensionsService: DimensionsService, private readonly cellsService: CellsService) { }

  ngOnInit(): void {

  }

  reverseStatus(x: number, y: number) {
    this.cellsService.updateAt({x, y})
  }
}
