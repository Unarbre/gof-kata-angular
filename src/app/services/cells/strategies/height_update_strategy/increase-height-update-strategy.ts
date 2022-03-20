import {HeightUpdateStrategy} from "./height-update-strategy";
import {Grid} from "../../cells.service";


export class IncreaseHeightUpdateStrategy implements HeightUpdateStrategy {

  private readonly reduceAmount: number;

  constructor(reduceAmount: number) {
    this.reduceAmount = reduceAmount;
  }

  apply(cells: Grid): Grid {
    return cells;
  }

}
