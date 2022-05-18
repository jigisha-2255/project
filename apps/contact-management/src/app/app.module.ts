import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppContactRoutingModule } from './app-contact-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DevicePageComponent } from './device-page/device-page.component';
import { AnnouncementPageComponent } from './announcement-page/announcement-page.component';
import { ContactTableComponent } from 'apps/contact-management/src/app/contact-page/contact-table/contact-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ContactHeaderComponent } from './contact-page/contact-header/contact-header.component';
import { ContactCardsComponent } from './contact-page/contact-cards/contact-cards.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { DeviceTableComponent } from './device-page/device-table/device-table.component';
import { AnnouncementHeaderComponent } from './announcement-page/announcement-header/announcement-header.component';
import { DeviceHeaderComponent } from './device-page/device-header/device-header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { AccountComponent } from './account/account.component';
import { AnnouncementListComponent } from './announcement-page/announcement-list/announcement-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ContactGridCardComponent } from './contact-page/contact-cards/contact-grid-card/contact-grid-card.component';
import { TestingComponentComponent } from './testing-component/testing-component.component';
import { MatSortModule } from '@angular/material/sort';
import { ContactFormComponent } from './contact-page/contact-form/contact-form.component';
import { ContactSortTableComponent } from 'apps/contact-management/src/app/contact-page/contact-sort-table/contact-sort-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormPageComponent } from './contact-page/contact-form-page/contact-form-page.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { SortByNamePipe } from './contact-page/contact-cards/sort-by-name.pipe';
import { ContactSortCardComponent } from './contact-page/contact-sort-card/contact-sort-card.component';
@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    ContactPageComponent,
    DevicePageComponent,
    AnnouncementPageComponent,
    ContactTableComponent,
    ContactHeaderComponent,
    ContactCardsComponent,
    DeviceTableComponent,
    AnnouncementHeaderComponent,
    DeviceHeaderComponent,
    AccountComponent,
    AnnouncementListComponent,
    ContactGridCardComponent,
    TestingComponentComponent,
    ContactFormComponent,
    ContactFormPageComponent,
    ContactSortTableComponent,
    SortByNamePipe,
    ContactSortCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppContactRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatInputModule,
    MatCheckboxModule,
    MatMenuModule,
    MatFormFieldModule,
    MatRippleModule,
    MatGridListModule,
    MatSortModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
