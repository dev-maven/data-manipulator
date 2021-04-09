import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlatformComponent } from './platform.component';
import { PlatformListContainerComponent } from './pages/container_components/platform-list/platform-list-container.component';
import { PlatformDetailContainerComponent } from './pages/container_components/platform-detail/platform-detail-container.component';
import { PlatformResolver } from './services/platform.resolver';

export const routes = [
  {
    path: '',
    component: PlatformComponent,
    children: [
      {
        path: '',
        redirectTo: 'view',
      },
      {
        path: 'view',
        component: PlatformListContainerComponent,
        pathMatch: 'full',
        resolve: {
          platforms: PlatformResolver,
        },
      },
      {
        path: ':id/detail',
        component: PlatformDetailContainerComponent,
        pathMatch: 'full',
        resolve: {
          platforms: PlatformResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatformRoutingModule {}
