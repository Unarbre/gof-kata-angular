import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NumbersUtils} from "../../../services/numbers/numbersUtils";

@Component({
  selector: 'gof-number-selector',
  templateUrl: './number-selector.component.html',
  styleUrls: ['./number-selector.component.scss']
})
export class NumberSelectorComponent implements OnInit {

  @Input()
  text: string = "Numbers";

  @Input()
  default: number = 0;

  @Output()
  valueChanged: EventEmitter<number> = new EventEmitter<number>();

  value: number = 0;

  previousValue: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.value = this.default;
  }

  emit(): void {
    if (this.value && NumbersUtils.isNumeric(this.value)) {
      this.previousValue = this.value.valueOf();

      this.valueChanged.emit(this.value);
    } else {
      this.resetValueWith(this.previousValue);
    }
  }

  resetValueWith(resetValue: number) {
    this.value = resetValue;
  }

}
