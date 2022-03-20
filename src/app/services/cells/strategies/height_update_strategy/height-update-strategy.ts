


export interface HeightUpdateStrategy {
  apply(cells: Array<Array<string>>): Array<Array<string>>;
}
