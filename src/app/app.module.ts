import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LightComponentComponent } from './components/light-component/light-component.component';
import { LightCountComponentComponent } from './components/light-count-component/light-count-component.component';
import { LightService } from './services/light.service';

import { StoreModule } from '@ngrx/store';

import * as AppReducers from './state/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LightComponentComponent,
    LightCountComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(AppReducers.reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [LightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
