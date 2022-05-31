import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementDataService } from 'apps/contact-management/src/app/services/element-data.service';
import { ContactCardsComponent } from './contact-cards/contact-cards.component';
import { ContactSortTableComponent } from 'apps/contact-management/src/app/contact-page/contact-sort-table/contact-sort-table.component';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  sortData!: ContactCardsComponent;
  ngOnInit(): void {
  }

  toggleStepper = false;
  elements: any;
  private filterData!: ContactSortTableComponent;

  constructor(private elementData: ElementDataService) {
    this.filterData = new ContactSortTableComponent(elementData);
    this.sortData = new ContactCardsComponent(elementData);
  }

  word = "";
  sortingBy = "";
  FilterWord(data: string) {
    this.word = data;
    // console.log(this.word);
    this.filterData.applyFilter(this.word);
  }
  sorting(data1: string) {
    this.sortingBy = data1;
    // console.log("Sorting By", this.sortingBy);
    this.sortData.applySorting(this.sortingBy);
  }
}
