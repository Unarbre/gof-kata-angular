import {HeightUpdateStrategy} from "./height-update-strategy";
import {CellsUtils} from "../../utils/cells-utils";
import {Grid} from "../../cells.service";


export class IncreaseHeightUpdateStrategy implements HeightUpdateStrategy {

  private readonly increaseAmount: number;

  constructor(reduceAmount: number) {
    this.increaseAmount = reduceAmount;
  }

  apply(cells: Grid): Grid {

    console.log(this.increaseAmount);
    const firstLine = cells[0];

    if (!firstLine) {
      return cells;
    }

    const length = firstLine.length;

    cells.push(...[...new Array(this.increaseAmount).keys()].map(
      () => [...new Array(length).keys()].map(
        () => CellsUtils.getRandomCell()
      )
    ));

    return cells
  }

}
