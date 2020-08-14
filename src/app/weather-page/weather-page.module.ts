import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherPageRoutingModule } from './weather-page-routing.module';
import { WeatherService } from '../data-access/weather.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, WeatherPageRoutingModule],
  providers: [WeatherService],
})
export class WeatherPageModule {}
