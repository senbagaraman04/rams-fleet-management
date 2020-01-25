import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router'
import { NgVerticalTimelineModule  } from 'ng-vertical-timeline';

import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { VehicleDetailsComponent } from './admin-panel/vehicle-details/vehicle-details.component';
import {MatTableModule} from '@angular/material'
import { DataSource } from '@angular/cdk/table';
import {CdkTableModule} from '@angular/cdk/table'
import {MatSortModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
   { path: 'about', component: AboutusComponent },
  // {path: 'vehicledetails', component: VehicleDetailsComponent},
   {path: 'admin', component: AdminPanelComponent,
  children:[   
    {path: 'vehicledetails', component: VehicleDetailsComponent}
  ]
  
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    AdminPanelComponent,
    VehicleDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgwWowModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    NgVerticalTimelineModule,
    CdkTableModule,
    MatSortModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
