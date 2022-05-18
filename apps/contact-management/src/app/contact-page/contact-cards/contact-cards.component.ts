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
  // constructor(private changeDetectorRef: ChangeDetectorRef) {
  // }

  // constructor(private changeDetectorRef: ChangeDetectorRef, private elementData: ElementDataService) {
  constructor(private elementData: ElementDataService) {
    const elements = elementData.elements();
    this.elements = JSON.parse(JSON.stringify(elements));
    // console.log(this.elements);
    this.setData = this.elements;
    console.log("Setdata", this.setData);
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<ContactModel>(this.elements);
    // this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  applySorting(word: string) {
    // console.log("call method Sorting Applied by", word);
    // this.elements = [];
    // return 0;
    let newArr = JSON.parse(JSON.stringify(this.setData))
    if (word == 'ascending') {
      newArr = newArr.sort(function (a: any, b: any) {
        var orderBool = a.name > b.name;
        return orderBool ? 1 : -1;
      });
      this.setData = newArr;
      console.log("newArrAsc", this.setData);
    }
    if (word == 'descending') {
      newArr = newArr.sort(function (a: any, b: any) {
        var orderBool = b.name > a.name;
        return orderBool ? 1 : -1;
      });
      this.setData = newArr;
      console.log("newArrDesc", this.setData);
    }
    console.log("setData is", this.setData);
  }
}
