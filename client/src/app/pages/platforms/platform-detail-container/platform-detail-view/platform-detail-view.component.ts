import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Platform } from 'src/app/store';

@Component({
  selector: 'app-platform-detail-view',
  templateUrl: './platform-detail-view.component.html',
  styleUrls: ['./platform-detail-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PlatformDetailViewComponent implements OnInit {
@Input() platform: Platform | null = {} as Platform;
  constructor() { }

  ngOnInit(): void {
  }

}
