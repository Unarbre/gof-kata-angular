import { Component, OnInit } from '@angular/core';
import {CellsService} from "../../../services/game-of-life/cells/cells.service";

@Component({
  selector: 'gof-shuffle-button',
  templateUrl: './shuffle-button.component.html',
  styleUrls: ['./shuffle-button.component.scss']
})
export class ShuffleButtonComponent implements OnInit {

  constructor(private  readonly cellsService: CellsService) { }

  ngOnInit(): void {
  }

  shuffle() {
    this.cellsService.shuffle();
  }
}
