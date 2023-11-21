import { WeatherService } from './../../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherDatas } from 'src/app/models/weatherDatas.interface';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss']
})
export class WeatherHomeComponent implements OnInit, OnDestroy{
  private readonly destroy$ : Subject<void> = new Subject()


  iniCity = 'São Paulo'
  weatherDatas !: WeatherDatas
  searchIcon = faMagnifyingGlass

  constructor(private weatherService: WeatherService) { }


  ngOnInit(): void {
     this.getWeatherDatas(this.iniCity)
  }



  getWeatherDatas(cityName : string): void {
    this.weatherService.getWeatherDatas(cityName)
    .pipe( takeUntil(this.destroy$))
    .subscribe({
      next: response  => {
        response && (this.weatherDatas = response)
     //   console.log(this.weatherDatas)
      },
      error : error => console.log(error),

  })}

  onSubmit(): void {
    this.getWeatherDatas(this.iniCity);
    this.iniCity = ''
  }



  ngOnDestroy(): void {
   this.destroy$.next();
   this.destroy$.complete()
  }

}
