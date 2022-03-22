import {Injectable} from '@angular/core';
import {BaseResourcesService} from "../base-resources.service";
import {Generation} from "./models/generation";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GenerationHttpService implements BaseResourcesService<Generation> {

  constructor(private readonly httpClient: HttpClient) {
  }

  postAtoA(entity: Generation): Observable<Generation> {
    return this.httpClient.post<Generation>(`${environment.generationServiceUrl}/generations/next`, entity);
  }


}
