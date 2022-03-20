import {HeightUpdateStrategy} from "./height-update-strategy";
import {CellsUtils} from "../../utils/cells-utils";


export class IncreaseHeightUpdateStrategy implements HeightUpdateStrategy {

  private readonly reduceAmount: number;

  constructor(reduceAmount: number) {
    this.reduceAmount = reduceAmount;
  }

  apply(cells: Grid): Grid {
    const firstLine = cells[0];

    if (!firstLine) {
      return cells;
    }

    const length = firstLine.length;

    cells.push(...[...new Array(this.reduceAmount).keys()].map(
      () => [...new Array(length).keys()].map(
        () => CellsUtils.getRandomCell()
      )
    ));

    return cells
  }

}
