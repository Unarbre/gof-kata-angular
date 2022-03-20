import {EnumsService} from "../../enums/enums.service";


export enum STATUS {
  ALIVE = "o",
  DEAD = ".",
}

export class CellsUtils {
  static getRandomCell() {
    return EnumsService.randomEnum(STATUS);
  }
}
