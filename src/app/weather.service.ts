import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IcurrentWeatherData } from "./icurrent-weather-data";
import { environment } from "src/environments/environment";
import { ICurrentWeather } from "./icurrent-weather";
import { Observable, pipe } from "rxjs";
import { map } from "rxjs/operators";
import { IWeatherService } from "./iweather-service";

@Injectable({
  providedIn: "root"
})
export class WeatherService implements IWeatherService {
  constructor(private httpClient: HttpClient) {}
  getCurrentWeather(
    searchText: string | number,
    country?: string
  ): Observable<ICurrentWeather> {
    let uriParam;
    if (typeof searchText == "string") {
      uriParam = `q=${searchText}`;
    } else {
      uriParam = `zip=${searchText}`;
    }
    if (country) {
      uriParam = `${uriParam},${country}`;
    }

    return this.httpClient
      .get<IcurrentWeatherData>(
        ` ${environment.baseUrl}api.openweathermap.org/data/2.5/weather?${uriParam}
        &appid=${environment.appId}`
      )
      .pipe(map(data => this.transformToICurrentWeather(data)));
  }

  private transformToICurrentWeather(
    data: IcurrentWeatherData
  ): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.kelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description
    };
  }

  private kelvinToFahrenheit(kelvin: number): number {
    return (kelvin * 9) / 5 - 459.67;
  }
}
