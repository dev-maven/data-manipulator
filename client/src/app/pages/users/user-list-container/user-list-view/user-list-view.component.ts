import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, User } from 'src/app/store';
import { TableUtil } from 'src/shared/table.util';

@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListViewComponent implements OnInit {
@Input() userList: User[] | null = [];
@Input() platformList: Platform[] | null = [];

 columns = {
  id: 'ID',
  first_name: 'First Name',
  last_name: 'Last Name',
  email: 'Email',
  gender: 'Gender',
  ip_address: 'IP Address',
  username: 'Username',
};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  view(id: any): void {
    this.router.navigate([`users/${id}/detail`]);
  }

  export(): void {
    if (this.userList) {
      const onlyNameAndSymbolArr: Partial<any>[] = this.userList.map(x => ({
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

}
