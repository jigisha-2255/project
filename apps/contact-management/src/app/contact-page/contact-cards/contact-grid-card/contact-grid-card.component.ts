import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-grid-card',
  templateUrl: './contact-grid-card.component.html',
  styleUrls: ['./contact-grid-card.component.scss']
})
export class ContactGridCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() cardIndex: any;
  @Input() element: any;
  contactHovered: any;
  showButton: boolean = false;
  checkedCards: any = {};
  mouseOver(index: number) {
    // console.log("mouse over" + index);
    this.contactHovered = "card" + index;
  }

  mouseLeave(index: number) {
    // console.log("mouse leave" + index);
    this.contactHovered = undefined;
  }

  isChecked(index: number) {
    return (this.checkedCards[`${index}`]);
  }

  checked(event: any, index: number) {
    console.log(event);
    if (event.checked) {
      this.checkedCards[`${index}`] = true;
    } else {
      this.checkedCards[`${index}`] = false;
    }
  }
}
