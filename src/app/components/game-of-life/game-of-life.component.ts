import {Component, OnInit} from '@angular/core';
import {DimensionsService} from "../../services/game-of-life/dimensions/dimensions.service";
import {CellsService, Grid} from "../../services/game-of-life/cells/cells.service";

@Component({
  selector: 'gof-generation',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.scss']
})
export class GameOfLifeComponent implements OnInit {

  cells: Grid = this.cellsService.cells;

  gridHeight: number = this.dimensionService.getHeight();
  gridLength: number = this.dimensionService.getLength();

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

  getNextGeneration() {
    this.cellsService.nextGeneration();
  }
}
