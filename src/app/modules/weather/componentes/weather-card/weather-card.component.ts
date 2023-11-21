import { WeatherDatas } from 'src/app/models/weatherDatas.interface';
import { Component, Input, OnInit } from '@angular/core';
import { faWind, faDroplet, faTemperatureHigh, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html'

})
export class WeatherCardComponent {

 @Input() weatherDatasInput !:  WeatherDatas

 minTempIcon = faTemperatureLow;
 maxTempIcon = faTemperatureHigh;
 humidityIcon = faDroplet;
 windIcon = faWind

}
