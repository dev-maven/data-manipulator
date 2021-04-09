import { Injectable } from '@angular/core';
import { MaterialCssVarsService } from 'angular-material-css-vars';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

constructor(private materialCssVarsService: MaterialCssVarsService) { }

init() {
  this.materialCssVarsService.setPrimaryColor('#673ab7');
  this.materialCssVarsService.setAccentColor('#135d82');
}
setMode(value: boolean): void {
  this.materialCssVarsService.setDarkTheme(value);
  localStorage.setItem('darkmode', value.toString());
}

setPrimary(value: string): void {
  this.materialCssVarsService.setPrimaryColor(value);
}
}
