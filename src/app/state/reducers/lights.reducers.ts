import * as LightActions from './lights.actions';

export interface State {
  colors: {
    'red': boolean;
    'blue': boolean;
    'green': boolean;
    'yellow': boolean;
    'orange': boolean;
    'purple': boolean;
    'cyan': boolean;
    'pink': boolean;
  };
  litLights: number;
}


const initialState: State = {
  colors: {
    'red': false,
    'blue': false,
    'green': false,
    'yellow': false,
    'orange': false,
    'purple': false,
    'cyan': false,
    'pink': false
  },
  litLights: 0
};

export function lightsReducer(state = initialState, action: LightActions.Actions) {
  switch (action.type) {
    case (LightActions.TURN_ON_LIGHT): {
      // const oldState = {...state};

      // if (!oldState.colors[action.payload.color]) {
      //   oldState.litLights++;
      // }
      // oldState.colors[action.payload.color] = true;

      // return oldState;

      return {
        ...state,
        colors: {
          ...state.colors,
          [action.payload.color]: true
        },
        litLights: !state.colors[action.payload.color] ? state.litLights + 1 : state.litLights
      };

    }

    case (LightActions.TURN_OFF_LIGHT): {
      // const oldState = {...state};
      // if (oldState.colors[action.payload.color]) {
      //   oldState.litLights--;
      // }

      // oldState.colors[action.payload.color] = false;

      // return oldState;

      return {
        ...state,
        colors: {
          ...state.colors,
          [action.payload.color]: false
        },
        litLights: state.colors[action.payload.color] ? state.litLights - 1 : state.litLights
      };

    }
  }
}
