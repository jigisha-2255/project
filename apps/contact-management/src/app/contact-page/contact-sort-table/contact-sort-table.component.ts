// import { SelectionModel } from '@angular/cdk/collections/selection-model';
import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ContactModel } from 'apps/contact-management/src/app/models/contact.model';
import { ElementDataService } from 'apps/contact-management/src/app/services/element-data.service';
import { ContactSortTableDataSource } from './contact-sort-table-datasource';

@Component({
  selector: 'app-contact-sort-table',
  templateUrl: './contact-sort-table.component.html',
  styleUrls: ['./contact-sort-table.component.scss']
})
export class ContactSortTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ContactModel>;
  dataSource: ContactSortTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['position', 'name', 'email', 'contact', 'empPosition'];
  elements = [];
  contactHovered: ContactModel | undefined;

  constructor(private elementData: ElementDataService) {
    this.dataSource = new ContactSortTableDataSource(elementData);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  // For Checkbox Selection
  selection = new SelectionModel<ContactModel>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach((row: ContactModel) => this.selection.select(row));
  }
  checkboxLabel(row?: ContactModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  handleMouseOver(row: ContactModel) {
    const position = row.position;
    this.elements.map((data: any) => {
      if (data.position === position) {
        data.show = true;
      }
    });
    this.contactHovered = row;
    // console.log("Mouse Hover");
  }
  handleMouseLeave(row: ContactModel) {
    const position = row.position;
    this.elements.map((data: any) => {
      if (data.position === position) {
        data.show = false;
      }
    });
    this.contactHovered = undefined;
    // console.log("Mouse Leave");
  }

  addShowCheckboxProperty(row: ContactModel) {
    this.elements.map((data: any) => {
      data.show = false;
    });
  }

  // End Checkbox Selection

  // For Filtering Data
  // applyFilter1(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   console.log("Filter1", filterValue);
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  applyFilter(word: string) {
    const filterValue = word;
    console.log("Filter word is:", filterValue);
    console.log(this.dataSource);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log("Filtered Element is", this.dataSource.filter);
  }
  // End Filtering 

}
