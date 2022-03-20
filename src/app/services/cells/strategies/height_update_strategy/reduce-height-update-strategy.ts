import {HeightUpdateStrategy} from "./height-update-strategy";


export class ReduceHeightUpdateStrategy implements HeightUpdateStrategy {

  private readonly reduceAmount: number;

  constructor(reduceAmount: number) {
    this.reduceAmount = reduceAmount;
  }


  apply(cells: Array<Array<string>>): Array<Array<string>> {
    return cells;
  }

}
