import { createReducer, on, Action } from '@ngrx/store';
import * as userActions from './user.actions';
import { User } from './user.model';

export interface UserState {
  user: User;
  users: User[];
  userLoading: boolean;
}

export const initialUserState: UserState = {
  user: {} as User,
  users: [],
  userLoading: false
};

const userReducerInternal = createReducer(
  initialUserState,

  on(userActions.getUsers, (state) => {
    return {
      ...state,
      userLoading: true
    };
  }),

  on(userActions.getUser, (state) => {
    return {
      ...state,
      userLoading: true
    };
  }),

  on(userActions.getUsersComplete, (state, { users }) => {
    return {
      ...state,
      users,
      userLoading: false
    };
  }),

on(userActions.getUserComplete, (state, { user }) => {
  return {
    ...state,
    user,
    userLoading: false
  };
})
);

export function userReducer(state: UserState | undefined, action: Action) {
  return userReducerInternal(state, action);
}
