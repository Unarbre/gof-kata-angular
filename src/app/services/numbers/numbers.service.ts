import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  constructor() { }


  isNumeric(num: number): boolean {
    return true;
  }

  isNegativeOrEqualZero(num: number): boolean {
    return num <= 0;
  }
}
