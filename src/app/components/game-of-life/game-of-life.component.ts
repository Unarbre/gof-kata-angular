import { Component, OnInit } from '@angular/core';
import {DimensionsService} from "../../services/dimensions/dimensions.service";

@Component({
  selector: 'gof-game-of-life',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.scss']
})
export class GameOfLifeComponent implements OnInit {

  cells: Array<Array<string>> = [['x', 'x']];

    constructor(private readonly dimensionService: DimensionsService) { }

  ngOnInit(): void {
  }

  updateLength(newLength: number): void {
    this.dimensionService.updateLength(newLength);
    }

  updateHeight(newHeight: number): void {
    console.log(newHeight);
    this.dimensionService.updateHeight(newHeight);
  }
}
