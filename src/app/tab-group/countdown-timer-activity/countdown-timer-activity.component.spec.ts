import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerActivityComponent } from './countdown-timer-activity.component';

describe('CountdownTimerActivityComponent', () => {
  let component: CountdownTimerActivityComponent;
  let fixture: ComponentFixture<CountdownTimerActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownTimerActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
