import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserResolver } from './services/user.resolver';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserDetailContainerComponent } from './pages/container_components/user-detail-container/user-detail-container.component';
import { UserListContainerComponent } from './pages/container_components/user-list-container/user-list-container.component';
import { UserDetailViewComponent } from './pages/view_components/user-detail-view/user-detail-view.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserListViewComponent } from './pages/view_components/user-list-view/user-list-view.component';

@NgModule({
  imports: [CommonModule, UserRoutingModule, SharedModule, FlexLayoutModule],
  declarations: [
    UserComponent,
    UserListContainerComponent,
    UserListViewComponent,
    UserDetailContainerComponent,
    UserDetailViewComponent,
  ],

  providers: [UserResolver],
})
export class UsersModule {}
