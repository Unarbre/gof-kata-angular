import {Injectable} from '@angular/core';
import {Coordonates} from "./models/coordonates.model";
import {DimensionsService} from "../dimensions/dimensions.service";
import {EnumsService} from "../enums/enums.service";
import {HeightUpdateStrategyFactory} from "./strategies/height_update_strategy/factory/height-update-strategy.factory";


export enum STATUS {
  ALIVE = "o",
  DEAD = ".",
}

@Injectable({
  providedIn: 'root'
})
export class CellsService {

  public cells: Array<Array<string>> = [];

  length: number = this.dimensionsService.getLength();
  height: number = this.dimensionsService.getHeight();

  constructor(private readonly dimensionsService: DimensionsService,
              private readonly enumsService: EnumsService,
              private readonly heightUpdateStrategyFactory: HeightUpdateStrategyFactory
  ) {
    this.randomize();
    this.handleSizeChanges();
  }


  randomize(): void {
    this.cells = [...new Array(this.height).keys()]
      .map(() => [...new Array(this.length).keys()]
        .map(() => this.getRandomCell()));
  }

  getRandomCell(): STATUS {
    return this.enumsService.randomEnum(STATUS);
  }


  updateAt(coordonates: Coordonates) {
    const cell = this.cells[coordonates.y][coordonates.x];
    this.cells[coordonates.y][coordonates.x] =
      cell == STATUS.ALIVE
        ? STATUS.DEAD
        : STATUS.ALIVE;
  }

  private handleSizeChanges() {
    this.dimensionsService.heightChange.asObservable().subscribe((height) => {
      const heightUpdateStrategy = this.heightUpdateStrategyFactory.get(this.height, height);
          this.cells = heightUpdateStrategy.apply(this.cells);
    });
    this.dimensionsService.lengthChange.asObservable().subscribe((height) => {

    });
  }
}
