import { Component, OnInit, Input } from '@angular/core';
import { LightService } from '../../services/light.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-light-component',
  templateUrl: './light-component.component.html',
  styleUrls: ['./light-component.component.css']
})
export class LightComponentComponent {

  @Input() color: string;
  @Input() threshold: number;

  updateThreshold = new Subject<any>();

  temperature = 0;
  isLit = false;

  constructor(
    private lightService: LightService
  ) { }


  fetchTemperature() {
    this.lightService.fetchTemperature().subscribe((result) => {

      this.temperature = result.temperature;

      if (this.temperature > this.threshold) {
        // if previous was not lit, increase counter
        if (!this.isLit) {
          this.lightService.increaseLightCounter();
        }
        this.isLit = true;
      } else {
        // if previous was lit, decrease counter
        if (this.isLit) {
          this.lightService.decreaseLightCounter();
        }

        this.isLit = false;
      }
    });
  }

}
