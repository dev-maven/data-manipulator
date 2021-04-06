import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { UsersResolver } from './users.resolver';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserListViewComponent } from './user-list-container/user-list-view/user-list-view.component';
import { UserDetailContainerComponent } from './user-detail-container/user-detail-container.component';
import { UserDetailViewComponent } from './user-detail-container/user-detail-view/user-detail-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
export const routes = [
  { path: '', component: UserListContainerComponent, pathMatch: 'full', resolve: {
    users: UsersResolver
  }, },
  { path: ':id/detail', component: UserDetailContainerComponent, pathMatch: 'full', resolve: {
    users: UsersResolver
  }, }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FlexLayoutModule
  ],
  declarations: [
    UserListContainerComponent,
    UserListViewComponent,
    UserDetailContainerComponent,
    UserDetailViewComponent],

  providers: [UsersResolver]
})
export class UsersModule { }
