import {Injectable} from '@angular/core';
import {Coordonates} from "./models/coordonates.model";
import {DimensionsService} from "../dimensions/dimensions.service";


export const enum STATUS {
  ALIVE = "x",
  DEAD = ".",
}

@Injectable({
  providedIn: 'root'
})
export class CellsService {

  public cells: Array<Array<string>> = [];

  constructor(private readonly dimensionsService: DimensionsService) {
    this.randomize();
  }


  randomize(): void {

  }



  updateAt(coordonates: Coordonates) {
    const cell = this.cells[coordonates.y][coordonates.x];
    this.cells[coordonates.y][coordonates.x] =
      cell == STATUS.ALIVE
        ? STATUS.DEAD
        : STATUS.ALIVE;
  }
}
