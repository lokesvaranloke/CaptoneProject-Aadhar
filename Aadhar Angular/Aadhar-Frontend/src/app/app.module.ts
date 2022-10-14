import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitizenloginComponent } from './citizenlogin/citizenlogin.component';
import { CitizenregisterComponent } from './citizenregister/citizenregister.component';
import { CitizenhomeComponent } from './citizenhome/citizenhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'citizenlogin', component: CitizenloginComponent},
  {path: 'citizenregister', component: CitizenregisterComponent},
  {path: 'citizenhome', component: CitizenhomeComponent},
  {path: 'adminhome', component: AdminhomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    CitizenloginComponent,
    CitizenregisterComponent,
    CitizenhomeComponent,
    AdminhomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
