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
  public paused: number = 0;
  public started: number = 0;
  pausedTimes: any[]=[] ;

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
      this.pausedTimes.push(this.countdown.i.text);
      console.log(this.pausedTimes);
      console.log(this.paused);
    }
    else{
    this.countdown.resume();
    this.toggleButton=false;
    this.started++;
    }

  }

  public get pausedValue(){
    return this.paused;
  }

  public get startedValue(){
    return this.started;
  }

  ngOnInit(): void {
    this.config = {leftTime: 30};
  }

}
