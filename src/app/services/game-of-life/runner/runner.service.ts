import {Injectable} from '@angular/core';
import {CellsService} from "../cells/cells.service";

@Injectable({
  providedIn: 'root'
})
export class RunnerService {

  isRunning: boolean = false;
  NEXT_GENERATION_DISPLAY_SPEED: number = 540;

  constructor(private readonly cellsService: CellsService) {
  }

  private toggleRunning(): void {
    this.isRunning = !this.isRunning;
  }

  run(): void {
    this.toggleRunning();
    this.startRunning();
  }

  startRunning(): void {
    setTimeout(() => {
      this.cellsService.nextGeneration();
      if (this.isRunning) this.startRunning();
    }, this.NEXT_GENERATION_DISPLAY_SPEED);

  }
}
