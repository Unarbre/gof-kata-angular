import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DimensionsService {

  lengthChange: Subject<number> = new Subject<number>();
  heightChange: Subject<number> = new Subject<number>();

  private length: number = 3;
  private height: number = 2;

  constructor() {
  }

  updateHeight(newHeight: number): void {
    this.heightChange.next(newHeight);
  }

  updateLength(newLength: number): void {
    this.lengthChange.next(newLength);
  }

  getLength(): number {
    return this.length;
  }

  getHeight(): number {
    return this.height;
  }

}
