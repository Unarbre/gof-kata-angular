import {LengthUpdateStrategy} from "../length-update-strategy";
import {SameLengthUpdateStrategy} from "../same-length-update-strategy";
import {ReduceLengthUpdateStrategy} from "../reduce-length-update-strategy";
import {IncreaseLengthUpdateStrategy} from "../increase-length-update-strategy";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LengthUpdateStrategyFactory {

  constructor() {
  }

  get(previousWidth: number, newWidth: number): LengthUpdateStrategy {

    if (previousWidth > newWidth) {
      return new ReduceLengthUpdateStrategy(previousWidth - newWidth);
    }

    if (previousWidth < newWidth) {
      return new IncreaseLengthUpdateStrategy(newWidth - previousWidth);
    }

    return new SameLengthUpdateStrategy();

  }
}
