import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlatformResolver } from './services/platform.resolver';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlatformDetailContainerComponent } from './pages/container_components/platform-detail/platform-detail-container.component';
import { PlatformListContainerComponent } from './pages/container_components/platform-list/platform-list-container.component';
import { PlatformDetailViewComponent } from './pages/view_components/platform-detail/platform-detail-view.component';
import { PlatformListViewComponent } from './pages/view_components/platform-list/platform-list-view.component';
import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformComponent } from './platform.component';

@NgModule({
  imports: [
    CommonModule,
    PlatformRoutingModule,
    SharedModule,
    FlexLayoutModule,
  ],
  declarations: [
    PlatformComponent,
    PlatformListContainerComponent,
    PlatformListViewComponent,
    PlatformDetailContainerComponent,
    PlatformDetailViewComponent,
  ],

  providers: [PlatformResolver],
})
export class PlatformsModule {}
