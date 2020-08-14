import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../data-access/weather.service';
@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
})
export class WeatherPageComponent implements OnInit {
  constructor(private readonly _weatherService: WeatherService) {}

  ngOnInit(): void {}
}
