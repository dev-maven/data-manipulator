import { createReducer, on, Action } from '@ngrx/store';
import * as platformActions from './platform.actions';
import { Platform, PlatformSummary } from './platform.model';

export const platformFeatureName = 'platform';

export interface PlatformState {
  platform: Platform;
  platformSummary: PlatformSummary;
}

export const initialPlatformState: PlatformState = {
  platform: {} as Platform,
  platformSummary: {} as PlatformSummary,
};

const platformReducerInternal = createReducer(
  initialPlatformState,

  on(platformActions.getPlatforms, (state) => {
    return {
      ...state
    };
  }),

  on(platformActions.getPlatform, (state) => {
    return {
      ...state
    };
  }),

  on(platformActions.getPlatformsComplete, (state, { platformSummary }) => {
    return {
      ...state,
      platformSummary
    };
  }),

on(platformActions.getPlatformComplete, (state, { platform }) => {
  return {
    ...state,
    platform
  };
})
);

export function platformReducer(state: PlatformState | undefined, action: Action): any {
  return platformReducerInternal(state, action);
}
