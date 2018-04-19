import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LightService {
  @Output() lightCounterChanged = new EventEmitter<number>();

  currentLights = 0;

  constructor(
    private httpClient: HttpClient
  ) {

  }

  fetchTemperature() {
    return this.httpClient.get<{
      temperature: number
    }>('/api/v1/temperature');
  }

  increaseLightCounter() {
    this.currentLights++;
    this.lightCounterChanged.emit(this.currentLights);
  }

  decreaseLightCounter() {
    this.currentLights--;
    this.lightCounterChanged.emit(this.currentLights);
  }
}
