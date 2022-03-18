import {Component, EventEmitter, Input, OnInit, Output, ViewChild, } from '@angular/core';
import {NumbersService} from "../../../services/numbers/numbers.service";
import {NumberSelectorComponent} from "../../generics/number-selector/number-selector.component";

@Component({
  selector: 'gof-size-selector',
  templateUrl: './size-selector.component.html',
  styleUrls: ['./size-selector.component.scss']
})
export class SizeSelectorComponent implements OnInit {

  @Input()
  text: string = "Size";

  @Output()
  sizeUpdated: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild(NumberSelectorComponent)
  numberSelector! : NumberSelectorComponent;

  value: number = 1;

  constructor(private readonly numberService: NumbersService) {

  }

  ngOnInit(): void {
  }

  updateSize(newSize: number) {
    if (this.isSizeValid(newSize)) {
      this.value = newSize;
      this.sizeUpdated.emit(newSize);
    } else {
      console.log(this.value);

      this.numberSelector.resetValueWith(this.value)
    }
  }

  isSizeValid(size: number): boolean {
    if (this.numberService.isNegativeOrEqualZero(size)) return false;

    return true;
  }
}
