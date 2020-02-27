import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-countdown-timer-controller',
  templateUrl: './countdown-timer-controller.component.html',
  styleUrls: ['./countdown-timer-controller.component.css']
})
export class CountdownTimerControllerComponent implements OnInit {

  constructor() { }

  toggleButton : boolean = false;
  config: any;
  time: number;
  paused: number = 0;
  started: number = 0;

  setTime(time){
    this.time = time;
    this.config = {leftTime: this.time};
  }

  @ViewChild("countdown") countdown: CountdownComponent;

  onToggleButton() {

    if(this.toggleButton === false){
      this.countdown.pause();
      this.toggleButton=true;
      this.paused++;
      console.log(this.countdown.i.text);
      console.log(this.paused);
    }
    else{
    this.countdown.resume();
    this.toggleButton=false;
    this.started++;
    }

  }

  ngOnInit(): void {
    this.config = {leftTime: 30};
  }

}
