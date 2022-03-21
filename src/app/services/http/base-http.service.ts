import {Entity} from "../structures/entity";
import {Observable} from "rxjs";

export interface BaseHttpService<entity extends Entity> {

  postAtoA(entity: entity): Observable<entity>;
}
