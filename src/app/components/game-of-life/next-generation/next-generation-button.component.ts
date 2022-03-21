import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'gof-next-generation',
  templateUrl: './next-generation-button.component.html',
  styleUrls: ['./next-generation-button.component.scss']
})
export class NextGenerationButtonComponent implements OnInit {

  @Output()
  clicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  isClicked() {
    this.clicked.emit();
  }

}
