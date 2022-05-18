import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactCardsComponent } from './contact-page/contact-cards/contact-cards.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactFormComponent } from './contact-page/contact-form/contact-form.component';
import { ContactFormPageComponent } from './contact-page/contact-form-page/contact-form-page.component';
import { ContactSortTableComponent } from 'apps/contact-management/src/app/contact-page/contact-sort-table/contact-sort-table.component';

const routes: Routes = [
  {
    path: 'contact', component: ContactPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ContactSortTableComponent,
      },
      {
        path: 'card',
        component: ContactCardsComponent
      },
      {
        path: 'form',
        component: ContactFormPageComponent
      },
    ],
  },
];


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })]
  ],
  exports: [RouterModule]
})
export class AppContactRoutingModule { }
export const routingComponents = [ContactPageComponent, ContactSortTableComponent, ContactCardsComponent, ContactFormComponent, ContactFormPageComponent]