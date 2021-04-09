import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileShared, User } from './user.model';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUsers = createSelector(
  selectUserState,
  (userState) => userState.users
);

export const selectUser = createSelector(
  selectUserState,
  (userState) => userState.user
);

export const selectPlatformUsers = (id: number) =>
  createSelector(selectUsers, (allUsers) => {
    const platformUser: User[] = [];
    allUsers.forEach((user) => {
      for (const profile in user.profile_shared) {
        if (
          +profile.replace(/\D/g, '') === id &&
          user.profile_shared[profile as keyof ProfileShared]
        ) {
          platformUser.push(user);
        }
      }
    });
    return platformUser;
  });
