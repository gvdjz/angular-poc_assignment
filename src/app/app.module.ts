import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountdownTimerDisplayComponent } from './tab-group/countdown-timer-display/countdown-timer-display.component';
import { CountdownTimerControllerComponent } from './tab-group/countdown-timer-controller/countdown-timer-controller.component';
import { CountdownTimerLogsComponent } from './tab-group/countdown-timer-logs/countdown-timer-logs.component';
import { CountdownTimerActivityComponent } from './tab-group/countdown-timer-activity/countdown-timer-activity.component';
import { FloatingBannerComponent } from './tab-group/floating-banner/floating-banner.component';
import { ProductListComponent } from './tab-group/product-list/product-list.component';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    TabGroupComponent,
    CountdownTimerDisplayComponent,
    CountdownTimerControllerComponent,
    CountdownTimerLogsComponent,
    CountdownTimerActivityComponent,
    FloatingBannerComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
