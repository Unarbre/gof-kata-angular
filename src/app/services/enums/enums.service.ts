import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnumsService {

  constructor() {

  }

  randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = Object.values(anEnum);
    const randomIndex = Math.floor(Math.random() * enumValues.length)
    return enumValues[randomIndex];
  }
}
