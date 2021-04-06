import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPlatforms, Platform, selectAppLoading } from 'src/app/store';

@Component({
  selector: 'app-platform-list-container',
  templateUrl: './platform-list-container.component.html',
  styleUrls: ['./platform-list-container.component.css']
})
export class PlatformListContainerComponent implements OnInit {
  platforms$?: Observable<Platform[]>;
  appLoading$?: Observable<boolean>;


  constructor(protected store: Store<any>) { }

  ngOnInit(): void {
    this.platforms$ = this.store.pipe(select(selectPlatforms));
    this.appLoading$ = this.store.pipe(select(selectAppLoading));

  }

}
