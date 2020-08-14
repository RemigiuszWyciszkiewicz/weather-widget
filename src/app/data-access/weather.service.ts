import { Injectable } from '@angular/core';
import { WeatherPageComponent } from '../weather-page/weather-page.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Weather, CityWeather } from './city-weather';
import { WeatherPageModule } from '../weather-page/weather-page.module';
import { CityId } from './city-id';
import { environment } from 'src/environments/environment';
@Injectable()
export class WeatherService {
  constructor(private readonly _httpClient: HttpClient) {}

  getWeather(cityId: CityId): Observable<CityWeather> {
    return this._httpClient.get<CityWeather>(`${environment.weather_api_url}`, {
      params: { id: cityId, appid: environment.weather_api_key },
    });
  }
}
