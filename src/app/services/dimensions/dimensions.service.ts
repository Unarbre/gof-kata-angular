import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DimensionsService {

  private length: number = 1;
  private height: number = 1;

  constructor() {

  }

  updateHeight(newHeight: number): void {
    this.height = newHeight;
  }

  updateLength(newLength: number): void {

    this.length = newLength;
  }

  getLength(): number {
    return this.length;
  }

  getHeight(): number {
    return this.height;
  }

}
