import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((a) => a.HomeModule),
    data: { preload: false },
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/user/user.module').then((a) => a.UsersModule),
    data: { preload: false },
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'platforms',
    loadChildren: () =>
      import('./features/platform/platform.module').then(
        (a) => a.PlatformsModule
      ),
    data: { preload: false },
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
