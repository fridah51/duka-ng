import { AfterViewInit, Component, Input, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Column } from './column';
import { Observable, of as observableOf, merge } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css']
})
export class ReusableTableComponent<T> implements AfterViewInit, OnInit {

 
  connect(): Observable<any[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.tableData),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([this.tableData]));
    }));
  }

 

  // table code ..............................
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() tableColumns: Array<Column> = [];
  @Input() tableData: Array<T> = [];

  displayedColumns: Array<string> = [];
  dataSource:MatTableDataSource<T> = new MatTableDataSource();

  constructor() {
  }

  ngOnInit(): void {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


//sorting code

  private getPagedData(data:any[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }


  private getSortedData(data:any []) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }


};

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}