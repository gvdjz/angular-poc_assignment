import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerControllerComponent } from './countdown-timer-controller.component';

describe('CountdownTimerControllerComponent', () => {
  let component: CountdownTimerControllerComponent;
  let fixture: ComponentFixture<CountdownTimerControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimerControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
