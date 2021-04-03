import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Platform, selectPlatforms, selectPlatform, selectPlatformLoading } from 'src/app/store';

@Component({
  selector: 'app-platform-detail-container',
  templateUrl: './platform-detail-container.component.html',
  styleUrls: ['./platform-detail-container.component.scss']
})
export class PlatformDetailContainerComponent implements OnInit {
platform$?: Observable<Platform>;
platformLoading$?: Observable<boolean>;

  constructor(protected store: Store<any>) { }

  ngOnInit(): void {
    this.platform$ = this.store.pipe(select(selectPlatform));
    this.platformLoading$ = this.store.pipe(select(selectPlatformLoading));

  }

}
