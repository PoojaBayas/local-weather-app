import { Injectable } from "@angular/core";
import { IWeatherService } from "./iweather-service";
import { ICurrentWeather } from "./icurrent-weather";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WeatherFakeService implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: "Bursa",
    country: "TR",
    date: 3241463234,
    image: "",
    temperature: 655.65,
    description: "light"
  };
  constructor() {}
  public getCurrentWeather(
    city: string,
    country: string
  ): Observable<ICurrentWeather> {
    return of(this.fakeWeather);
  }
}
