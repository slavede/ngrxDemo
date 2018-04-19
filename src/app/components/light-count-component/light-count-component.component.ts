import { Component, OnInit } from '@angular/core';
import { LightService } from '../../services/light.service';

import { Store } from '@ngrx/store';
import * as LightReducers from '../../state/reducers/lights.reducers';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-light-count-component',
  templateUrl: './light-count-component.component.html',
  styleUrls: ['./light-count-component.component.css']
})
export class LightCountComponentComponent implements OnInit {

  currentLights = this.store.select('lights');

  constructor(
    private lightService: LightService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    // this.lightService.lightCounterChanged.subscribe((result: number) => {
    //   this.currentLights = result;
    // });
  }

}
