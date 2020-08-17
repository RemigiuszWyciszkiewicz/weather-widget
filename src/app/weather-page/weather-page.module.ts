import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherPageRoutingModule } from './weather-page-routing.module';
import { WeatherService } from '../data-access/weather.service';
import { WeatherPageComponent } from './weather-page.component';
import { UnixTimestampTimePipe } from './unix-timestamp-time.pipe';

@NgModule({
  declarations: [WeatherPageComponent, UnixTimestampTimePipe],
  imports: [CommonModule, WeatherPageRoutingModule],
  providers: [WeatherService, UnixTimestampTimePipe],
})
export class WeatherPageModule {}
