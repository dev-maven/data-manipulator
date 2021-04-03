import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/store';
import { fadeOut, blub } from 'src/shared/animations';
import { TableUtil } from 'src/shared/table.util';

@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeOut, blub],

})
export class UserListViewComponent implements OnInit, OnChanges {
@Input() userList: any;
displayedColumns = ['id', 'first_name', 'last_name', 'email',
'gender', 'ip_address', 'username',
'platform1', 'platform2', 'platform3', 'action'];
dataSource = new MatTableDataSource<User>();

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
    if (this.userList && this.dataSource.data.length < 1) {
    this.dataSource.data = this.userList;

    }

  }

  doFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  view(id: any): void {
    this.router.navigate([`users/${id}/detail`]);
  }

  export(): void {
    const onlyNameAndSymbolArr: Partial<any>[] = this.dataSource.data.map(x => ({
      ID: x.id,
      First_Name: x.first_name,
      Last_Name: x.last_name,
      Email: x.email,
      Gender: x.gender,
      IP_Address: x.ip_address,
      Username: x.username,
      Shared_on_platform1: x.profile_shared.shared_on_platform_1 === null
      ? 'Not Applicable' : x.profile_shared.shared_on_platform_1 === true ? 'YES' : 'NO',
      Shared_on_platform2: x.profile_shared.shared_on_platform_2 === null
      ? 'Not Applicable' : x.profile_shared.shared_on_platform_2 === true ? 'YES' : 'NO',
      Shared_on_platform3: x.profile_shared.shared_on_platform_3 === null
      ? 'Not Applicable' : x.profile_shared.shared_on_platform_3 === true ? 'YES' : 'NO',
    }));
    TableUtil.exportArrayToExcel(onlyNameAndSymbolArr, 'user-data');
  }

}
