import {Component, OnInit} from '@angular/core';
import {RunnerService} from "../../../services/game-of-life/runner/runner.service";

@Component({
  selector: 'gof-run-button',
  templateUrl: './run-button.component.html',
  styleUrls: ['./run-button.component.scss']
})
export class RunButtonComponent implements OnInit {

  constructor(private readonly runnerService: RunnerService) {
  }

  ngOnInit(): void {
  }

  isClicked(): void {
    this.runnerService.run();
  }

  getButtonStatusText() {
    return this.runnerService.isRunning
      ? "Stop"
      : "Run";
  }
}
