import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { LightService } from '../../services/light.service';
import { Subject } from 'rxjs/Subject';

import { Store } from '@ngrx/store';
import * as LightReducers from '../../state/reducers/lights.reducers';
import * as LightActions from '../../state/reducers/lights.actions';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-light-component',
  templateUrl: './light-component.component.html',
  styleUrls: ['./light-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightComponentComponent {

  @Input() color: string;
  @Input() threshold: number;

  updateThreshold = new Subject<any>();

  temperature = 0;
  isLit = this.store.select((state) => {
    if (state.lights) {
      return state.lights.colors[this.color];
    } else {
      return false;
    }
  });

  constructor(
    private lightService: LightService,
    private store: Store<AppState>
  ) { }


  fetchTemperature() {
    this.lightService.fetchTemperature().subscribe((result) => {

      this.temperature = result.temperature;

      if (this.temperature > this.threshold) {
        this.store.dispatch(new LightActions.TurnOnLight({
          color: this.color
        }));
      } else {
        this.store.dispatch(new LightActions.TurnOffLight({
          color: this.color
        }));
      }
    });

  }

}
