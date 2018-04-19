import { Component, OnInit, Input } from '@angular/core';
import { LightService } from '../../services/light.service';
import { Subject } from 'rxjs/Subject';

import { Store } from '@ngrx/store';
import * as LightReducers from '../../state/reducers/lights.reducers';
import * as LightActions from '../../state/reducers/lights.actions';
import { AppState } from '../../state/app.state';

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
    private lightService: LightService,
    private store: Store<AppState>
  ) { }


  fetchTemperature() {
    this.lightService.fetchTemperature().subscribe((result) => {

      this.temperature = result.temperature;

      if (this.temperature > this.threshold) {
        if (!this.isLit) {
          this.store.dispatch(new LightActions.TurnOnLight({
            color: this.color
          }));
        }
        this.isLit = true;
      } else {
        if (this.isLit) {
          this.store.dispatch(new LightActions.TurnOffLight({
            color: this.color
          }));
        }

        this.isLit = false;
      }
    });
  }

}
