import { createReducer, on, Action } from '@ngrx/store';
import * as platformActions from './platform.actions';
import { Platform } from './platform.model';

export const platformFeatureName = 'platform';

export interface PlatformState {
  platform: Platform;
  platforms: Platform[];
  platformLoading: boolean;
}

export const initialPlatformState: PlatformState = {
  platform: {} as Platform,
  platforms: [],
  platformLoading: false
};

const platformReducerInternal = createReducer(
  initialPlatformState,

  on(platformActions.getPlatforms, (state) => {
    return {
      ...state,
      platformLoading: true
    };
  }),

  on(platformActions.getPlatform, (state) => {
    return {
      ...state,
      platformLoading: true
    };
  }),

  on(platformActions.getPlatformsComplete, (state, { platforms }) => {
    return {
      ...state,
      platforms,
      platformLoading: false
    };
  }),

on(platformActions.getPlatformComplete, (state, { platform }) => {
  return {
    ...state,
    platform,
    platformLoading: false
  };
})
);

export function platformReducer(state: PlatformState | undefined, action: Action) {
  return platformReducerInternal(state, action);
}
