import {LengthUpdateStrategy} from "./length-update-strategy";
import {Grid} from "../../cells.service";


export class ReduceLengthUpdateStrategy implements LengthUpdateStrategy {

  private readonly reduceAmount: number;

  constructor(reduceAmount: number) {
    this.reduceAmount = reduceAmount;
  }


  apply(cells: Grid): Grid {
    return cells;
  }

}
