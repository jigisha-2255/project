import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef, DebugElement, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ContactModel } from 'apps/contact-management/src/app/models/contact.model';
import { ElementDataService } from 'apps/contact-management/src/app/services/element-data.service';
@Component({
  selector: 'app-contact-cards',
  templateUrl: './contact-cards.component.html',
  styleUrls: ['./contact-cards.component.scss']
})
export class ContactCardsComponent {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  obs!: Observable<any>;
  dataSource: any;
  word = "";
  elements: ContactModel[] | undefined;
  setData: ContactModel[] | undefined;
  selected: string | undefined;

  // constructor(private changeDetectorRef: ChangeDetectorRef) {
  // }

  // constructor(private changeDetectorRef: ChangeDetectorRef, private elementData: ElementDataService) {
  constructor(private elementData: ElementDataService) {
    this.elements = this.elementData.getSessionDataMethod();
    // this.elements = JSON.parse(JSON.stringify(elements));
    // console.log(this.elements);
    this.setData = this.elements;
    console.log("Setdata", this.setData);
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<ContactModel>(this.elements);
    // this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
    console.log("set data on ngOnInit:", this.setData);
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  // Sorting in same Page(Testing)
  applySort() {
    let newArr = JSON.parse(JSON.stringify(this.setData))
    if (this.selected == 'Ascending') {
      newArr = newArr.sort(function (a: any, b: any) {
        var orderBool = a.name > b.name;
        return orderBool ? 1 : -1;
      });
      this.setData = newArr;
      console.log("newArrAsc", this.setData);
    }
    if (this.selected == 'Descending') {
      newArr = newArr.sort(function (a: any, b: any) {
        var orderBool = b.name > a.name;
        return orderBool ? 1 : -1;
      });
      this.setData = newArr;
      console.log("newArrDesc", this.setData);
    }
    console.log("setData is", this.setData);
  }
  // End Sorting same Page

  // Sorting by Name
  applySorting(word: string) {
    // let newArr = JSON.parse(JSON.stringify(this.setData))
    if (word == 'ascending') {
      this.setData = this.elements?.sort(function (a: any, b: any) {
        var orderBool = a.name > b.name;
        return orderBool ? 1 : -1;
      });
      // this.setData = newArr;
      console.log("newArrAsc", this.setData);
    }
    if (word == 'descending') {
      this.setData = this.elements?.sort(function (a: any, b: any) {
        var orderBool = b.name > a.name;
        return orderBool ? 1 : -1;
      });
      // this.setData = newArr;
      console.log("newArrDesc", this.setData);
    }
    console.log("setData is", this.setData);
  }
  // End Sorting by Name
}

