import { createReducer, on, Action } from '@ngrx/store';
import * as userActions from './user.actions';
import { User } from './user.model';

export interface UserState {
  user: User;
  users: User[];
}

export const initialUserState: UserState = {
  user: {} as User,
  users: [],
};

const userReducerInternal = createReducer(
  initialUserState,

  on(userActions.getUsers, (state) => {
    return {
      ...state,
    };
  }),

  on(userActions.getUser, (state) => {
    return {
      ...state,
    };
  }),

  on(userActions.getUsersComplete, (state, { users }) => {
    return {
      ...state,
      users,
    };
  }),

on(userActions.getUserComplete, (state, { user }) => {
  return {
    ...state,
    user,
  };
})
);

export function userReducer(state: UserState | undefined, action: Action): any {
  return userReducerInternal(state, action);
}
