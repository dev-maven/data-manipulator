import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fadeOut, blub } from '../animations';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeOut, blub],
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() tableData: any;
  @Input() columnHeader: any;
  @Input() platformTable = false;
  @Output() view = new EventEmitter();
  @Output() export = new EventEmitter();
  dataSource = new MatTableDataSource<any>();
  objectKeys = Object.keys;
  @ViewChild(MatSort, { static: false }) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  @ViewChild(MatPaginator, { static: false }) set page(
    paginator: MatPaginator
  ) {
    this.dataSource.paginator = paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.dataSource.data.length < 1) {
    this.dataSource.data = this.tableData;
    }
  }

  doFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

viewData(element: any): void {
  if (this.platformTable) {
    this.view.emit(element.platform_id);
  } else {
  this.view.emit(element.id);
  }
}

exportData(): void {
  this.export.emit();
  }

}
