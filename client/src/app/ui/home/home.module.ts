import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { NgxFitTextModule } from 'ngx-fit-text';


export const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgxFitTextModule.forRoot()
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
