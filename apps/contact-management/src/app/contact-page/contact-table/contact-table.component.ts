import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ContactModel } from 'apps/contact-management/src/app/models/contact.model';
import { ElementDataService } from 'apps/contact-management/src/app/services/element-data.service';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.scss']
})
export class ContactTableComponent {
  // @Input() ELEMENTS_DATA!: any[];
  @Input() word!: string;
  contactHovered: ContactModel | undefined
  dataSource!: MatTableDataSource<ContactModel>;
  show = false;


  elements: any;
  constructor(private elementData: ElementDataService) {
    // console.log(elementData.elements());
    this.elements = elementData.getSessionDataMethod();
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<ContactModel>(this.elements);
    // console.log(this.elements);
  }


  displayedColumns: string[] = ['position', 'name', 'email', 'contact', 'empPosition'];

  // For Pagination 
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }
  // End Pagination

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
      this.dataSource.data.forEach(row => this.selection.select(row));
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
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // console.log(this.dataSource.filter);
  }
  // End Filtering 

}



