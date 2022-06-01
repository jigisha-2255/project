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

  addressForm = this.fb.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    contact: [null, Validators.required],
    position: [null, Validators.required],
  });


  position = [
    { name: 'Front End Developer', abbreviation: 'FE' },
    { name: 'Angular Developer', abbreviation: 'AD' },
    { name: 'Flutter Developer', abbreviation: 'AF' },
  ];

  constructor(private fb: FormBuilder, private elementData: ElementDataService, private router: Router) { }

  onSubmit(data: any) {
    // this['confirmPurchase'].push(data)
    // console.log(this['confirmPurchase'])
    // this['ElementDataService'].elements(this['confirmPurchase']);
    // this['confirmPurchase'].push(data)
    // console.log(this['confirmPurchase'])
    // this['ElementDataService'].elements(this['confirmPurchase']);
    // this['ElementDataService'].elements = data;
    console.log(data);
    sessionStorage.setItem('name', data.name);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('contact', data.contact);
    sessionStorage.setItem('position', data.position);
    sessionStorage.setItem('data', JSON.stringify(data));
    this.router.navigateByUrl('/contact/list');
  }
}
