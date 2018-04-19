import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import * as LightReducers from './reducers/lights.reducers';

export const reducers: ActionReducerMap<AppState> = {
  lights: LightReducers.lightsReducer
};
