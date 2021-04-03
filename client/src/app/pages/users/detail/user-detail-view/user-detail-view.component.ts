import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail-view',
  templateUrl: './user-detail-view.component.html',
  styleUrls: ['./user-detail-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class UserDetailViewComponent implements OnInit {
@Input() user: any;
@Input() platforms: any;
  constructor() { }

  ngOnInit(): void {
  }

}
