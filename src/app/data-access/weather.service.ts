import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityWeather } from './city-weather';

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
