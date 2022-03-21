export class NumbersUtils {

  constructor() { }


  static isNumeric(num: number): boolean {
    return true;
  }

  static isNegativeOrEqualZero(num: number): boolean {
    return num <= 0;
  }

  static toIterator(num: number) {
    if (this.isNegativeOrEqualZero(num)) return [];
    return [...Array(num).keys()];
  }
}
