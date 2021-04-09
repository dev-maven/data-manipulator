import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlatformState } from './platform.reducer';

export const selectPlatformState = createFeatureSelector<PlatformState>('platform');


export const selectPlatforms = createSelector(
  selectPlatformState,
  platformState => platformState.platformSummary.platforms
);

export const selectPlatform = createSelector(
  selectPlatformState,
  platformState => platformState.platform
);
