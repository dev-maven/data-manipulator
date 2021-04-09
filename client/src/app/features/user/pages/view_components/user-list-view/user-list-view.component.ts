import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { User, Platform } from 'src/app/core/store';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  view(id: any): void {
    this.router.navigate([`users/${id}/detail`]);
  }
}
