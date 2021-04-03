import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Platform } from 'src/app/store';
import { blub, fadeOut } from 'src/shared/animations';
import { TableUtil } from 'src/shared/table.util';


@Component({
  selector: 'app-platform-list-view',
  templateUrl: './platform-list-view.component.html',
  styleUrls: ['./platform-list-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeOut, blub],

  
})
export class PlatformListViewComponent implements OnInit, OnChanges {
@Input() platformList: any;
displayedColumns = ['platform_id', 'name', 'last_shared', 'display_order', 'action'];
dataSource = new MatTableDataSource<Platform>();

@ViewChild(MatSort, { static: false }) set content(sort: MatSort) {
  this.dataSource.sort = sort;
}

@ViewChild(MatPaginator, { static: false }) set page(
  paginator: MatPaginator
) {
  this.dataSource.paginator = paginator;
}

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if (this.platformList.platforms && this.dataSource.data.length < 1) {
    this.dataSource.data = this.platformList.platforms;
    }


  }

  doFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  view(id: any): void {
    this.router.navigate([`platforms/${id}/detail`]);
  }

  export(): void {
    const onlyNameAndSymbolArr: Partial<any>[] = this.dataSource.data.map(x => ({
      ID: x.platform_id,
      Name: x.name,
      Last_Shared: x.last_shared,
      Display_Order: x.display_order,
    }));
    TableUtil.exportArrayToExcel(onlyNameAndSymbolArr, 'platform-data');
  }

}
