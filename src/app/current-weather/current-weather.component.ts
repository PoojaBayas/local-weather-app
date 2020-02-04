import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current:ICurrentWeather
  constructor() {
    this.current={
      city:"Bethesda",
      country:'US',
      date:1234251525,
      image:'',
      temperature:40,
      description:'sunny'
    }as ICurrentWeather

   }

  ngOnInit() {
  }

}
