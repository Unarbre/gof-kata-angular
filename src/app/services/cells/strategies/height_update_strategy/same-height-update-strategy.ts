import {HeightUpdateStrategy} from "./height-update-strategy";


export class SameHeightUpdateStrategy implements HeightUpdateStrategy {
  apply(cells: Array<Array<string>>): Array<Array<string>> {
    return cells;
  }

}
