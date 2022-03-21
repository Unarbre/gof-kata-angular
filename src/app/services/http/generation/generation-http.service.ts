import { Injectable } from '@angular/core';
import {BaseHttpService} from "../base-http.service";
import {Generation} from "./models/generation";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenerationHttpService implements BaseHttpService<Generation> {

  constructor(private readonly httpClient: HttpClient) {
  }

  postAtoA(entity: Generation): Observable<Generation> {
    return this.httpClient.post<Generation>("http://localhost:8080/generations/next", {entity});
  }




}
