import {LengthUpdateStrategy} from "./length-update-strategy";
import {Grid} from "../../cells.service";


export class ReduceLengthUpdateStrategy implements LengthUpdateStrategy {

  private readonly reduceAmount: number;

  constructor(reduceAmount: number) {
    this.reduceAmount = reduceAmount;
  }


  apply(cells: Grid): Grid {
    cells.map(line => line.splice(line.length - this.reduceAmount, this.reduceAmount))
    return cells;
  }

}
