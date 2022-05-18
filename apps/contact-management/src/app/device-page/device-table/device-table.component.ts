import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  name: string;
  mobile: number;
  macadd: string;
  firstlogin: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Raju', mobile: 9999999999, macadd: '00:0d:83:b1:c0:8e', firstlogin: 'Nov 2021' },
  { position: 2, name: 'Ramu', mobile: 9888888888, macadd: '00:0d:83:b1:c0:8e', firstlogin: 'Aug 2021' },
  { position: 3, name: 'Ramu', mobile: 9888888888, macadd: '00:0d:83:b1:c0:8e', firstlogin: 'Aug 2021' },
  { position: 4, name: 'Ramu', mobile: 9888888888, macadd: '00:0d:83:b1:c0:8e', firstlogin: 'Aug 2021' },
  { position: 5, name: 'Ramu', mobile: 9888888888, macadd: '00:0d:83:b1:c0:8e', firstlogin: 'Aug 2021' },
  { position: 6, name: 'Ramu', mobile: 9888888888, macadd: '00:0d:83:b1:c0:8e', firstlogin: 'Aug 2021' },
  { position: 7, name: 'Ramu', mobile: 9888888888, macadd: '00:0d:83:b1:c0:8e', firstlogin: 'Aug 2021' },
  { position: 8, name: 'Ramu', mobile: 9888888888, macadd: '00:0d:83:b1:c0:8e', firstlogin: 'Aug 2021' },
  { position: 9, name: 'Ramu', mobile: 9888888888, macadd: '00:0d:83:b1:c0:8e', firstlogin: 'Aug 2021' },
  { position: 10, name: 'Ramu', mobile: 9888888888, macadd: '00:0d:83:b1:c0:8e', firstlogin: 'Aug 2021' },
  { position: 11, name: 'Ramu', mobile: 9888888888, macadd: '00:0d:83:b1:c0:8e', firstlogin: 'Aug 2021' },
  { position: 12, name: 'Ramu', mobile: 9888888888, macadd: '00:0d:83:b1:c0:8e', firstlogin: 'Aug 2021' },
];


@Component({
  selector: 'app-device-table',
  templateUrl: './device-table.component.html',
  styleUrls: ['./device-table.component.scss']
})
export class DeviceTableComponent {
  displayedColumns: string[] = ['select', 'position', 'name', 'mobile', 'macadd', 'firstlogin'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  selection = new SelectionModel<PeriodicElement>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  handleMouseOver(row: { position: any; }) {
    const position = row.position;
    ELEMENT_DATA.map((data: any) => {
      if (data.position === position) {
        data.show = true;
      }
    });
  }

  handleMouseLeave(row: { position: any; }) {
    const position = row.position;
    ELEMENT_DATA.map((data: any) => {
      if (data.position === position) {
        data.show = false;
      }
    });
  }

  addShowCheckboxProperty() {
    ELEMENT_DATA.map((data: any) => {
      data.show = false
    });
  }
}