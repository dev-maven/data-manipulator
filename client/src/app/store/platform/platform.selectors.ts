import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlatformState } from './platform.reducer';

export const selectPlatformState = createFeatureSelector<PlatformState>('platform');


export const selectPlatforms = createSelector(
  selectPlatformState,
  platformState => platformState.platforms
);

export const selectPlatform = createSelector(
  selectPlatformState,
  platformState => platformState.platform
);

export const selectPlatformLoading = createSelector(
  selectPlatformState,
  platformState => platformState.platformLoading
);
