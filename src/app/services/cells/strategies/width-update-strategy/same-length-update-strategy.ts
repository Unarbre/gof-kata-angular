import {LengthUpdateStrategy} from "./length-update-strategy";
import {Grid} from "../../cells.service";


export class SameLengthUpdateStrategy implements LengthUpdateStrategy {
  apply(cells: Grid): Grid {
    return cells;
  }

}
