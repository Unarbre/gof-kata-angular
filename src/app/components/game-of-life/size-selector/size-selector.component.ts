import {Component, EventEmitter, Input, OnInit, Output, ViewChild, } from '@angular/core';
import {NumbersUtils} from "../../../services/numbers/numbersUtils";
import {NumberSelectorComponent} from "../../generics/number-selector/number-selector.component";

@Component({
  selector: 'gof-size-selector',
  templateUrl: './size-selector.component.html',
  styleUrls: ['./size-selector.component.scss']
})
export class SizeSelectorComponent implements OnInit {

  @Input()
  text: string = "Size";

  @Input()
  startingValue: number = 2;

  @Output()
  sizeUpdated: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild(NumberSelectorComponent)
  numberSelector! : NumberSelectorComponent;

  value: number = 1;

  constructor() {

  }

  ngOnInit(): void {
  }

  updateSize(newSize: number) {
    if (this.isSizeValid(newSize)) {
      this.value = newSize;
      this.sizeUpdated.emit(newSize);
    } else {
      this.numberSelector.resetValueWith(this.value)
    }
  }

  isSizeValid(size: number): boolean {
    return !NumbersUtils.isNegativeOrEqualZero(size);
  }
}
