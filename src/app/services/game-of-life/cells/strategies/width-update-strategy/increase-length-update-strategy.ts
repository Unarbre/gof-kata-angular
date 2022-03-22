import {LengthUpdateStrategy} from "./length-update-strategy";
import {CellsUtils} from "../../utils/cells-utils";
import {Grid} from "../../cells.service";
import {NumbersUtils} from "../../../../numbers/numbersUtils";


export class IncreaseLengthUpdateStrategy implements LengthUpdateStrategy {

  private readonly increaseAmount: number;

  constructor(reduceAmount: number) {
    this.increaseAmount = reduceAmount;
  }

  apply(cells: Grid): Grid {
    cells.forEach(line => line.push(
      ...NumbersUtils.toIterator(this.increaseAmount)
        .map(() => CellsUtils.getRandomCell())
    ))
    return cells
  }

}
