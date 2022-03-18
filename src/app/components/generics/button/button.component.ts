import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'gof-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {


  @Input()
  buttonText: string = 'button';


  @Output()
  clicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(): void {
    this.clicked.emit();
  }

}
