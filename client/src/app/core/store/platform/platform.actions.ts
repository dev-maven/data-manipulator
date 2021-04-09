import { createAction, props } from '@ngrx/store';
import { Platform, PlatformSummary } from './platform.model';

export const getPlatform = createAction('[Platform] getPlatform', props<{id: number}>());
export const getPlatformComplete = createAction(
  '[Platform] getPlatformComplete',
  props<{ platform: Platform }>()
);
export const getPlatforms = createAction('[Platform] getPlatforms');
export const getPlatformsComplete = createAction(
  '[Platform] getPlatformsComplete',
  props<{ platformSummary: PlatformSummary }>()
);
