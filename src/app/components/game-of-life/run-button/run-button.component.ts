import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'gof-run-button',
  templateUrl: './run-button.component.html',
  styleUrls: ['./run-button.component.scss']
})
export class RunButtonComponent implements OnInit {

  @Output()
  clicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  isClicked() {
    this.clicked.emit();
  }

}
