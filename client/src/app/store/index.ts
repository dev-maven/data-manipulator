import { platformReducer, PlatformEffects } from './platform';
import { UserEffects, userReducer } from './user';

export * from './platform';
export * from './user';



export const appReducers = {
  platform: platformReducer,
  user: userReducer,
};

export const appEffects = [PlatformEffects, UserEffects];
