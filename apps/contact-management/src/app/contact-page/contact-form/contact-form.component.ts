import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  userForm: FormGroup
  listData: any;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      // address: ['', Validators.required],
      // contactNo: ['', Validators.required],
      // gender: ['', Validators.required]
    })
  }
  public addItem(): void {
    this.listData.push(this.userForm.value);
  }

  ngOnInit(): void {
  }

}
