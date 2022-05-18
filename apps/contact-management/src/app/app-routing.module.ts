import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DevicePageComponent } from './device-page/device-page.component';
import { AnnouncementPageComponent } from './announcement-page/announcement-page.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full' },
  { path: 'device', component: DevicePageComponent },
  { path: 'announcement', component: AnnouncementPageComponent },
  { path: 'account', component: AccountComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DevicePageComponent, AnnouncementPageComponent, AccountComponent]