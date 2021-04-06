import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Platform, ProfileShared, User } from 'src/app/store';

@Component({
  selector: 'app-user-detail-view',
  templateUrl: './user-detail-view.component.html',
  styleUrls: ['./user-detail-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class UserDetailViewComponent implements OnInit, OnChanges {
@Input() user: User | null = {} as User;
@Input() platforms: Platform[] | null = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.user) {
    this.user = this.manipulateData(this.user);
    }
  }

  manipulateData(user: User): User {
    const availablePlatforms: Platform[] = [];
    if (this.platforms) {
      for (const property in user.profile_shared) {
        if (user.profile_shared[property as keyof ProfileShared]) {
          const platformNumber = +(property.replace(/\D/g, ''));
          availablePlatforms.push(this.platforms.find(x => x.platform_id === platformNumber) ?? {} as Platform);
        }
      }
    }
    const newUser = Object.assign({platforms_details: availablePlatforms}, user);
    return newUser;
  }

}
