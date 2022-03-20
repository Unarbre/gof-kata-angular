import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NumbersService} from "../../../services/numbers/numbers.service";

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

  constructor(private readonly numbersService: NumbersService) {
  }

  ngOnInit(): void {
    this.value = this.default;
  }

  emit(): void {
    if (this.value && this.numbersService.isNumeric(this.value)) {
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
