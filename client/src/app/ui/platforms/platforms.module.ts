import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { PlatformsResolver } from './platforms.resolver';
import { PlatformListContainerComponent } from './list/platform-list-container/platform-list-container.component';
import { PlatformListViewComponent } from './list/platform-list-view/platform-list-view.component';
import { PlatformDetailViewComponent } from './detail/platform-detail-view/platform-detail-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlatformDetailContainerComponent } from './detail/platform-detail-container/platform-detail-container.component';
export const routes = [
  { path: '', component: PlatformListContainerComponent, pathMatch: 'full', resolve: {
    platforms: PlatformsResolver
  }, },
  { path: ':id/detail', component: PlatformDetailContainerComponent, pathMatch: 'full', resolve: {
    platforms: PlatformsResolver
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
    PlatformListContainerComponent,
    PlatformListViewComponent,
    PlatformDetailContainerComponent,
  PlatformDetailViewComponent],

  providers: [PlatformsResolver]
})
export class PlatformsModule { }
