import { Injectable } from '@angular/core';
import { ContactModel } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ElementDataService {
  obj = [];
  elements(): ContactModel[] {
    return [
      { position: 1, name: 'Dishant', email: 'dish@gmail.com', contact: 8888888888, empPosition: 'Flutter Developer' },
      { position: 2, name: 'Priya', email: 'priya@gmail.com', contact: 9898989898, empPosition: 'Angular Developer' },
      { position: 3, name: 'Samar', email: 'samar@gmail.com', contact: 9898989898, empPosition: 'Flutter Developer' },
      { position: 4, name: 'Anuj', email: 'anuj@gmail.com', contact: 9898989898, empPosition: 'Flutter Developer' },
      { position: 5, name: 'Aman', email: 'aman@gmail.com', contact: 9898989898, empPosition: 'Flutter Developer' },
      { position: 6, name: 'Kinjal', email: 'kinjal@gmail.com', contact: 9898989898, empPosition: 'Flutter Developer' },
      { position: 7, name: 'Nensi', email: 'nensi@gmail.com', contact: 9898989898, empPosition: 'Flutter Developer' },
      { position: 8, name: 'Om', email: 'om@gmail.com', contact: 9898989898, empPosition: 'Flutter Developer' },
      { position: 9, name: 'Raj', email: 'raj@gmail.com', contact: 9111111111, empPosition: 'Flutter Developer' },
      { position: 10, name: 'Jiya', email: 'jiya@gmail.com', contact: 9898989898, empPosition: 'Flutter Developer' },
      { position: 11, name: 'Jiyan', email: 'jiyan@gmail.com', contact: 9898989898, empPosition: 'Angular Developer' },
      { position: 12, name: 'Kiyan', email: 'kiyan@gmail.com', contact: 9898989898, empPosition: 'Flutter Developer' },
    ]
  }

  getSessionDataMethod(): ContactModel[] {
    this.obj = JSON.parse(sessionStorage.getItem('data') ?? "[]");
    console.log(this.obj.length);
    return this.obj;
  }

  setSessionDataMethod(data: ContactModel) {
    let obj = JSON.parse(sessionStorage.getItem('data') ?? "[]");
    // return this.obj;
    obj.push(data);
    sessionStorage.setItem('data', JSON.stringify(obj));

  }


}
