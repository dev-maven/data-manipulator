import { createReducer, on, Action } from '@ngrx/store';
import * as loaderActions from './loader.actions';

export interface LoaderState {
  actionCount: number;
  appLoading: boolean;
}

export const initialLoaderState: LoaderState = {
  actionCount: 0,
  appLoading: false
};

const loaderReducerInternal = createReducer(
  initialLoaderState,

  on(loaderActions.incrementLoader, (state) => {
    return {
      ...state,
      actionCount: state.actionCount + 1,
      appLoading: true
    };
  }),

  on(loaderActions.decrementLoader, (state) => {
    return {
      ...state,
      actionCount: state.actionCount - 1,
      appLoading: (state.actionCount - 1 === 0 ) ? false : true
    };
  }),
);

export function loaderReducer(state: LoaderState | undefined, action: Action): any {
  return loaderReducerInternal(state, action);
}
