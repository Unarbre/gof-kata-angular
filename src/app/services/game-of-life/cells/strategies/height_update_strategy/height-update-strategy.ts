import { Grid } from "../../cells.service";



export interface HeightUpdateStrategy {
  apply(cells: Grid): Grid;
}
