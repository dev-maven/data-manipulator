import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-platform-detail-view',
  templateUrl: './platform-detail-view.component.html',
  styleUrls: ['./platform-detail-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PlatformDetailViewComponent implements OnInit {
@Input() platform: any;
  constructor() { }

  ngOnInit(): void {
  }

}
