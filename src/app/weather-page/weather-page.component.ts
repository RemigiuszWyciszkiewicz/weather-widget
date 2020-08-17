import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../data-access/weather.service';
import { CityId } from '../data-access/city-id';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { CityWeather } from '../data-access/city-weather';

export enum TimeOfDayImage {
  MORNING = 'https://cdn.pixabay.com/photo/2017/04/20/08/45/beach-2245049_960_720.png',
  AFTERNOON = 'https://wallpapersite.com/images/pages/pic_w/10470.png',
  EVENING = 'https://img5.goodfon.com/original/1920x1080/2/16/abstract-art-night-moon-landscape-pyramids-creative-art.jpg',
}
@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
})
export class WeatherPageComponent implements OnInit {
  get timeOfDayImage(): TimeOfDayImage {
    const hours = new Date(this.weatherUpdateTime * 1000).getHours();

    if (hours < 4) {
      return TimeOfDayImage.EVENING;
    }
    if (hours < 12) {
      return TimeOfDayImage.MORNING;
    }
    if (hours < 20) {
      return TimeOfDayImage.AFTERNOON;
    }

    return TimeOfDayImage.EVENING;
  }

  weather$: Observable<CityWeather>;
  weatherUpdateTime: number;
  serverError = false;

  constructor(private readonly _weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherAutoRefreshing(300000);
    this.fetchCityWeather();
  }

  fetchCityWeather(): void {
    this.weather$ = this._weatherService.getWeather(CityId.WROCLAW).pipe(
      tap((value) => {
        this.weatherUpdateTime = value.dt;
      }),
      catchError((error) => {
        this.serverError = true;
        return of(error);
      })
    );
  }

  private weatherAutoRefreshing(time: number): void {
    setInterval(this.fetchCityWeather.bind(this), time);
  }
}
