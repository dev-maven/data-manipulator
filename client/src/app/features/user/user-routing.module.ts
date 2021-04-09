import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserResolver } from './services/user.resolver';
import { UserComponent } from './user.component';
import { UserListContainerComponent } from './pages/container_components/user-list-container/user-list-container.component';
import { UserDetailContainerComponent } from './pages/container_components/user-detail-container/user-detail-container.component';

export const routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'view',
      },
      {
        path: 'view',
        component: UserListContainerComponent,
        pathMatch: 'full',
        resolve: {
          users: UserResolver,
        },
      },
      {
        path: ':id/detail',
        component: UserDetailContainerComponent,
        pathMatch: 'full',
        resolve: {
          users: UserResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
