import { Component, OnInit } from '@angular/core';
import { CountdownTimerControllerComponent } from '../countdown-timer-controller/countdown-timer-controller.component';

@Component({
  selector: 'app-countdown-timer-logs',
  templateUrl: './countdown-timer-logs.component.html',
  styleUrls: ['./countdown-timer-logs.component.css']
})
export class CountdownTimerLogsComponent implements OnInit {
   paused : number;
   started : number;

  controller = new CountdownTimerControllerComponent();

  constructor() {

    this.paused = this.controller.pausedValue;
    this.started = this.controller.startedValue;
   }

  ngOnInit(): void {
  }

}
