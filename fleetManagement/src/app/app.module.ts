import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router'
import { NgVerticalTimelineModule  } from 'ng-vertical-timeline';

import { MatCardModule } from '@angular/material';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
   { path: 'about', component: AboutusComponent },
   {path: 'admin', component: AdminPanelComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgwWowModule,
    RouterModule,
    MatCardModule,
    NgVerticalTimelineModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
