import { Component, OnInit } from '@angular/core';
import {MaterialCssVarsService} from 'angular-material-css-vars';
import { ThemeService } from 'src/shared/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data-combination';
  darkmode = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
  }


}
