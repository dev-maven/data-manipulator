import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const getUser = createAction('[User] getUser', props<{id: number}>());
export const getUserComplete = createAction(
  '[User] getUserComplete',
  props<{ user: User }>()
);
export const getUsers = createAction('[User] getUsers');
export const getUsersComplete = createAction(
  '[User] getUsersComplete',
  props<{ users: User[] }>()
);
export const userError = createAction(
  '[User] userError',
  props<{ error: string }>()
);
