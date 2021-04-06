import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from 'src/app/store';
import { TableUtil } from 'src/shared/table.util';


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

  export(): void {
    if (this.platformList) {
      const onlyNameAndSymbolArr: Partial<any>[] = this.platformList.map(x => ({
        ID: x.platform_id,
        Name: x.name,
        Last_Shared: x.last_shared,
        Display_Order: x.display_order,
      }));
      TableUtil.exportArrayToExcel(onlyNameAndSymbolArr, 'platform-data');
    }

  }

}
