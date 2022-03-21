import {Grid} from "../../../cells/cells.service";
import {Entity} from "../../../structures/entity";


export interface Generation extends  Entity{
  readonly length: number;
  readonly height: number;
  readonly cells: Grid;
}
