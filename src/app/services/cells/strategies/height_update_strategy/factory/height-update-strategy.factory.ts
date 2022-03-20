import {HeightUpdateStrategy} from "../height-update-strategy";
import {SameHeightUpdateStrategy} from "../same-height-update-strategy";
import {ReduceHeightUpdateStrategy} from "../reduce-height-update-strategy";
import {IncreaseHeightUpdateStrategy} from "../increase-height-update-strategy";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HeightUpdateStrategyFactory {

  constructor() {
  }

  get(previousHeight: number, newHeight: number): HeightUpdateStrategy {

    if (previousHeight > newHeight) {
      return new ReduceHeightUpdateStrategy(previousHeight - newHeight);
    }

    if (previousHeight < newHeight) {
      return new IncreaseHeightUpdateStrategy(newHeight - previousHeight);
    }

    return new SameHeightUpdateStrategy();

  }
}
