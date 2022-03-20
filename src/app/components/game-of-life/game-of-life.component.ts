import {Component, Input, OnInit} from '@angular/core';
import {DimensionsService} from "../../services/dimensions/dimensions.service";
import {CellsService} from "../../services/cells/cells.service";

@Component({
  selector: 'gof-game-of-life',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.scss']
})
export class GameOfLifeComponent implements OnInit {

  cells: Array<Array<string>> = this.cellsService.cells;

  constructor(
    private readonly dimensionService: DimensionsService,
    private readonly cellsService: CellsService,
  ) {
  }

  ngOnInit(): void {
  }

  updateLength(newLength: number): void {
    this.dimensionService.updateLength(newLength);
  }

  updateHeight(newHeight: number): void {
    this.dimensionService.updateHeight(newHeight);
  }
}
