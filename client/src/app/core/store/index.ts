import { PlatformService, UserService } from '../services';
import { loaderReducer } from './loader';
import { platformReducer, PlatformEffects } from './platform';
import { UserEffects, userReducer } from './user';

export * from './platform';
export * from './user';
export * from './loader';

export const appReducers = {
  platform: platformReducer,
  user: userReducer,
  loader: loaderReducer,
};

export const appServices = [UserService, PlatformService];

export const appEffects = [PlatformEffects, UserEffects];
