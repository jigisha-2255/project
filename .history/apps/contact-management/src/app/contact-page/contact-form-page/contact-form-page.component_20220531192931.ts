import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ElementDataService } from 'apps/contact-management/src/app/services/element-data.service';

@Component({
  selector: 'app-contact-form-page',
  templateUrl: './contact-form-page.component.html',
  styleUrls: ['./contact-form-page.component.scss']
})
export class ContactFormPageComponent {
  totalElements: number;
  [x: string]: any;
  addressForm = this.fb.group({
    position: [],
    name: [null, Validators.required],
    email: [null, Validators.required],
    contact: [null, Validators.required],
    empPosition: [null, Validators.required],
  });


  empPosition = [
    { name: 'Front End Developer', abbreviation: 'FE' },
    { name: 'Angular Developer', abbreviation: 'AD' },
    { name: 'Flutter Developer', abbreviation: 'AF' },
  ];

  constructor(private fb: FormBuilder, private elementData: ElementDataService, private router: Router) {
    this.elementData.getSessionDataMethod();
    this.totalElements = this.elementData.obj.length + 1;
  }

  onSubmit(data: any) {
    this.elementData.setSessionDataMethod(data);
    this.router.navigateByUrl('/contact/list');
  }

}

