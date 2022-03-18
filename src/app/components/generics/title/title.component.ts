import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gof-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input()
  public text: string = 'Title';

  constructor() { }

  ngOnInit(): void {
  }

  getTitle(): string {
    return this.text.toUpperCase();
  }

}
