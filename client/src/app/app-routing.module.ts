import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './ui/pages/pages.component';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent, children: [
      {
        path: '',
        loadChildren: () =>
          import('./ui/home/home.module').then(a => a.HomeModule),
        data: { preload: false },
        runGuardsAndResolvers: 'always',
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./ui/users/users.module').then(a => a.UsersModule),
        data: { preload: false },
        runGuardsAndResolvers: 'always',
      },
      {
        path: 'platforms',
        loadChildren: () =>
          import('./ui/platforms/platforms.module').then(a => a.PlatformsModule),
        data: { preload: false },
        runGuardsAndResolvers: 'always',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
