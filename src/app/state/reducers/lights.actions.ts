import { Action } from '@ngrx/store';

export const TURN_ON_LIGHT = 'TURN_ON_LIGHT';
export const TURN_OFF_LIGHT = 'TURN_OFF_LIGHT';

export class TurnOnLight implements Action {
  readonly type = TURN_ON_LIGHT;

  constructor(public payload: {
    color: string
  }) {}
}

export class TurnOffLight implements Action {
  readonly type = TURN_OFF_LIGHT;

  constructor(public payload: {
    color: string
  }) {}
}

export type Actions = TurnOnLight | TurnOffLight;
