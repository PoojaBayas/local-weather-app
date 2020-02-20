import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';

import { IWeatherService } from '../iweather-service';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current:ICurrentWeather
  constructor(private weatherService:WeatherService) {
    this.current={
      
    }as ICurrentWeather

   }

  ngOnInit() {
    this.weatherService.getCurrentWeather('Bellevue','US').subscribe(
      data =>this.current = data)
    
  }

}
