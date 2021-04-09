import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  public showOptions: boolean = false;
  darkmode = false;
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.init();
    const check = localStorage.getItem('darkmode');
    if (check) {
      this.darkmode = JSON.parse(check);
      this.themeService.setMode(this.darkmode);
    }
  }

  changeTheme(theme: any): void {
    this.themeService.setPrimary(theme);
  }

  toggleMode(): void {
    this.darkmode = !this.darkmode;
    this.themeService.setMode(this.darkmode);
  }
}
