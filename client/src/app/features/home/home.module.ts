import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxFitTextModule } from 'ngx-fit-text';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgxFitTextModule.forRoot(),
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
