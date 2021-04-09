import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoaderState } from './loader.reducer';

export const selectLoaderState = createFeatureSelector<LoaderState>('loader');


export const selectAppLoading = createSelector(
  selectLoaderState,
  loaderState => loaderState.appLoading
);

