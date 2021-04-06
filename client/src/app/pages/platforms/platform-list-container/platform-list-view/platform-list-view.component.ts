import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from 'src/app/store';


@Component({
  selector: 'app-platform-list-view',
  templateUrl: './platform-list-view.component.html',
  styleUrls: ['./platform-list-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlatformListViewComponent implements OnInit {
@Input() platformList: Platform[] | null = [];
columns = {
  platform_id : 'ID',
  name: 'Name',
  last_shared: 'Last Shared',
  display_order: 'Display Order',
  action: 'Action'
};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  view(id: any): void {
    this.router.navigate([`platforms/${id}/detail`]);
  }
}
