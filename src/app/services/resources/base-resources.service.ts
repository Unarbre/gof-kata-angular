import {Entity} from "../structures/entity";
import {Observable} from "rxjs";

export interface BaseResourcesService<entity extends Entity> {

  postAtoA(entity: entity): Observable<entity>;
}
