import {LengthUpdateStrategy} from "./length-update-strategy";
import {CellsUtils} from "../../utils/cells-utils";
import {Grid} from "../../cells.service";


export class IncreaseLengthUpdateStrategy implements LengthUpdateStrategy {

  private readonly increaseAmount: number;

  constructor(reduceAmount: number) {
    this.increaseAmount = reduceAmount;
  }

  apply(cells: Grid): Grid {
    return cells
  }

}
