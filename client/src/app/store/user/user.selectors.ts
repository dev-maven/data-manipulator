import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');


export const selectUsers = createSelector(
  selectUserState,
  userState => userState.users
);

export const selectUser = createSelector(
  selectUserState,
  userState => userState.user
);

export const selectUserLoading = createSelector(
  selectUserState,
  userState => userState.userLoading
);
