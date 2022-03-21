import {HeightUpdateStrategy} from "./height-update-strategy";
import {Grid} from "../../cells.service";


export class ReduceHeightUpdateStrategy implements HeightUpdateStrategy {

  private readonly reduceAmount: number;

  constructor(reduceAmount: number) {
    this.reduceAmount = reduceAmount;
  }


  apply(cells: Grid): Grid {
    cells.splice(cells.length - this.reduceAmount, this.reduceAmount);

    return cells;
  }

}
