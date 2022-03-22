import {HeightUpdateStrategy} from "./height-update-strategy";
import {Grid} from "../../cells.service";


export class SameHeightUpdateStrategy implements HeightUpdateStrategy {
  apply(cells: Grid): Grid {
    return cells;
  }

}
