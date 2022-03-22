import {EnumUtils} from "../../../enums/enumUtils";


export enum STATUS {
  ALIVE = "x",
  DEAD = ".",
}

export class CellsUtils {
  static getRandomCell() {
    return EnumUtils.randomEnum(STATUS);
  }
}
