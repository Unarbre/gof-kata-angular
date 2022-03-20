import {Component, Input, OnInit} from '@angular/core';
import {DimensionsService} from "../../../services/dimensions/dimensions.service";
import {CellsService} from "../../../services/cells/cells.service";

@Component({
  selector: 'gof-cell-grid',
  templateUrl: './cell-grid.component.html',
  styleUrls: ['./cell-grid.component.scss']
})
export class CellGridComponent implements OnInit {


  @Input()
  cells: Array<Array<string>> = [['x', 'x'], [".", "."]];

  length: number = 2;
  height: number = 2;

  constructor(private readonly dimensionsService: DimensionsService, private readonly cellsService: CellsService) { }

  ngOnInit(): void {
    this.length = this.dimensionsService.getLength();
    this.height = this.dimensionsService.getHeight();

    this.dimensionsService.heightChange.asObservable().subscribe((height) => {})
    this.dimensionsService.lengthChange.asObservable().subscribe((height) => {})
  }

  reverseStatus(x: number, y: number) {
    this.cellsService.updateAt({x, y})
  }
}
