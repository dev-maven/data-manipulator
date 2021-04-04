import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Platform } from 'src/app/store';

@Component({
  selector: 'app-user-detail-view',
  templateUrl: './user-detail-view.component.html',
  styleUrls: ['./user-detail-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class UserDetailViewComponent implements OnInit, OnChanges {
@Input() user: any;
@Input() platforms: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.user = this.manipulateData(this.user);
  }

  manipulateData(value: any): any {
    const element = Object.assign({}, value);
    const platforms: Platform[] = this.platforms.platforms;
    const availablePlatforms = [];
    if (element.profile_shared.shared_on_platform_1){
      availablePlatforms.push(platforms.find(x => x.platform_id === 1));
    }
    if (element.profile_shared.shared_on_platform_2){
      availablePlatforms.push(platforms.find(x => x.platform_id === 2));
    }
    if (element.profile_shared.shared_on_platform_3){
      availablePlatforms.push(platforms.find(x => x.platform_id === 3));
    }
    element['platforms_details'] = availablePlatforms;
    return element;
  }

}
