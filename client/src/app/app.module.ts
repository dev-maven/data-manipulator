import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/navigation/header/header.component';
import { SidenavListComponent } from './core/components/navigation/sidenav-list/sidenav-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFitTextModule } from 'ngx-fit-text';
import { MaterialCssVarsModule } from 'angular-material-css-vars';
import { AppInterceptor } from 'src/app/core/interceptors/app-interceptor';
import { appReducers, appEffects, appServices } from './core/store';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidenavListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    NgxFitTextModule.forRoot(),
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(appEffects),
    HttpClientModule,
    MaterialCssVarsModule.forRoot({
      isAutoContrast: true,
      darkThemeClass: 'isDarkTheme',
      lightThemeClass: 'isLightTheme',
      // ...
    }),
  ],
  providers: [
    appServices,
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
