import { createAction, props } from '@ngrx/store';
import { Platform } from './platform.model';

export const getPlatform = createAction('[Platform] getPlatform', props<{id: number}>());
export const getPlatformComplete = createAction(
  '[Platform] getPlatformComplete',
  props<{ platform: Platform }>()
);
export const getPlatforms = createAction('[Platform] getPlatforms');
export const getPlatformsComplete = createAction(
  '[Platform] getPlatformsComplete',
  props<{ platforms: Platform[] }>()
);
export const platformError = createAction(
  '[Platform] platformError',
  props<{ error: string }>()
);
