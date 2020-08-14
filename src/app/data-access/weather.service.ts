import { Injectable } from '@angular/core';
import { WeatherPageComponent } from '../weather-page/weather-page.component';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Weather, CityWeather } from './city-weather';
import { WeatherPageModule } from '../weather-page/weather-page.module';

@Injectable()
export class WeatherService {
  apiUrl = 'api.openweathermap.org/data/2.5/weather?id=3081368&appid=6f1a243886425bbb2d620ed0891ba61e';

  constructor(private readonly _httpClient: HttpClient) {}

  getWeather(): Observable<CityWeather> {
    return this._httpClient.get<CityWeather>(this.apiUrl);
  }
}
