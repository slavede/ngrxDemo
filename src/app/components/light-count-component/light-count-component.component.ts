import { Component, OnInit } from '@angular/core';
import { LightService } from '../../services/light.service';

@Component({
  selector: 'app-light-count-component',
  templateUrl: './light-count-component.component.html',
  styleUrls: ['./light-count-component.component.css']
})
export class LightCountComponentComponent implements OnInit {

  currentLights = 0;

  constructor(
    private lightService: LightService
  ) { }

  ngOnInit() {
    this.lightService.lightCounterChanged.subscribe((result: number) => {
      this.currentLights = result;
    });
  }

}
