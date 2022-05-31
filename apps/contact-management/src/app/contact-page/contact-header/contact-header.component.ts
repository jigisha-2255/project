import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-header',
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.scss']
})
export class ContactHeaderComponent {
  icon = false;
  selectedSort = "Ascending";
  @Output() onPlusClick = new EventEmitter<boolean>();
  @Output() filterApplied: EventEmitter<string> = new EventEmitter<string>();
  @Output() sortingApplied: EventEmitter<string> = new EventEmitter<string>();

  plusClick() {
    this.onPlusClick.emit(true);
  }

  applyFilter($event: any) {
    this.filterApplied.emit($event.target.value);
  }

  btnClick = function () {
    console.log("Add btn clicked");
  };

  selectSorting: string = "";

  sortingChange() {
    switch (this.selectSorting) {
      case "Ascending": {
        this.sortingApplied.emit('ascending');
        break;
      }
      case "Descending": {
        this.sortingApplied.emit('descending');
        break;
      }
    }
  }
}
