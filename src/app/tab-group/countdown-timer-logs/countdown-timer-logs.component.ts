import { Component, OnInit } from '@angular/core';
import { CountdownTimerControllerComponent } from '../countdown-timer-controller/countdown-timer-controller.component';

@Component({
  selector: 'app-countdown-timer-logs',
  templateUrl: './countdown-timer-logs.component.html',
  styleUrls: ['./countdown-timer-logs.component.css']
})
export class CountdownTimerLogsComponent implements OnInit {

  private paused : number;
  private started : number;

  constructor() {
   }

  ngOnInit(): void {
  }

}
