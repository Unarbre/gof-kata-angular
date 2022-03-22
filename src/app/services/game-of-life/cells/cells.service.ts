import {Injectable} from '@angular/core';
import {Coordonates} from "./models/coordonates.model";
import {DimensionsService} from "../dimensions/dimensions.service";
import {HeightUpdateStrategyFactory} from "./strategies/height_update_strategy/factory/height-update-strategy.factory";
import {CellsUtils, STATUS} from "./utils/cells-utils";
import {
  LengthUpdateStrategyFactory
} from "./strategies/width-update-strategy/factory/length-update-strategy-factory.service";
import {GenerationHttpService} from "../../resources/generation/generation-http.service";


export type Cell = string;
export type Line = Array<Cell>;
export type Grid = Array<Line>;

@Injectable({
  providedIn: 'root'
})
export class CellsService {

  public cells: Grid = [];

  length: number = this.dimensionsService.getLength();
  height: number = this.dimensionsService.getHeight();

  constructor(private readonly dimensionsService: DimensionsService,
              private readonly heightUpdateStrategyFactory: HeightUpdateStrategyFactory,
              private readonly lengthUpdateStrategyFactory: LengthUpdateStrategyFactory,
              private readonly generationHttpService: GenerationHttpService,
  ) {
    this.randomize();
    this.handleSizeChanges();
  }


  randomize(): void {
    this.cells = [...new Array(this.height).keys()]
      .map(() => [...new Array(this.length).keys()]
        .map(() => CellsUtils.getRandomCell()));
  }


  updateAt(coordonates: Coordonates) {
    const cell = this.cells[coordonates.y][coordonates.x];
    this.cells[coordonates.y][coordonates.x] =
      cell == STATUS.ALIVE
        ? STATUS.DEAD
        : STATUS.ALIVE;
  }

  updateWith(grid: Grid): void {
    this.cells.length = 0
    this.cells.push(...grid);
  }

  private handleSizeChanges() {
    this.dimensionsService.heightChange.asObservable().subscribe((height) => {
      const heightUpdateStrategy = this.heightUpdateStrategyFactory.get(this.height, height);
      this.cells = heightUpdateStrategy.apply(this.cells);
      this.height = height;
    });


    this.dimensionsService.lengthChange.asObservable().subscribe((length) => {
      const lengthUpdateStrategy = this.lengthUpdateStrategyFactory.get(this.length, length);
      this.cells = lengthUpdateStrategy.apply(this.cells);
      this.length = length;
    });
  }

  nextGeneration(): void {
    this.generationHttpService.postAtoA(
      {
        length: this.length,
        height: this.height,
        cells: this.cells,
      }
    ).subscribe(generation => {
      this.updateWith(generation.cells);
    })
  }
}
