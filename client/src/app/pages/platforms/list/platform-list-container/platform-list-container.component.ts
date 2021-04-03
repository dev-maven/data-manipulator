import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPlatforms, Platform, selectPlatformLoading } from 'src/app/store';

@Component({
  selector: 'app-platform-list-container',
  templateUrl: './platform-list-container.component.html',
  styleUrls: ['./platform-list-container.component.css']
})
export class PlatformListContainerComponent implements OnInit {
  platforms$?: Observable<Platform[]>;
platformLoading$?: Observable<boolean>;


  constructor(protected store: Store<any>) { }

  ngOnInit(): void {
    this.platforms$ = this.store.pipe(select(selectPlatforms));
    this.platformLoading$ = this.store.pipe(select(selectPlatformLoading));

  }

}
