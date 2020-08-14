import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../data-access/weather.service';
import { CityId } from '../data-access/city-id';
@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
})
export class WeatherPageComponent implements OnInit {
  constructor(private readonly _weatherService: WeatherService) {}

  ngOnInit(): void {
    this._weatherService.getWeather(CityId.WROCLAW).subscribe(console.log);
  }
}
