import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Platform, User } from 'src/app/core/store';

@Component({
  selector: 'app-platform-detail-view',
  templateUrl: './platform-detail-view.component.html',
  styleUrls: ['./platform-detail-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlatformDetailViewComponent implements OnInit {
  @Input() platform: Platform | null = {} as Platform;
  @Input() users: User[] = [];
  columns = {
    id: 'ID',
    first_name: 'First Name',
    last_name: 'Last Name',
    email: 'Email',
    gender: 'Gender',
    ip_address: 'IP Address',
    username: 'Username',
    action: 'Action',
  };
  constructor(private router: Router) {}

  ngOnInit(): void {}

  view(id: any): void {
    this.router.navigate([`users/${id}/detail`]);
  }
}
