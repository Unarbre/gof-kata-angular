import { Grid } from "../../cells.service";



export interface LengthUpdateStrategy {
  apply(cells: Grid): Grid;
}
