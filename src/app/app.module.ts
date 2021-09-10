import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgwWowModule } from 'ngx-wow';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router';
import {DemoMaterialModule} from './material-module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { VehicleDetailsComponent } from './admin-panel/vehicle-details/vehicle-details.component';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TermsComponent } from './terms/terms.component';
import { ChartComponent } from './admin-panel/chart/chart.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './service/http-client.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DriverDetailsComponent } from './admin-panel/driver-details/driver-details.component';
import { ServiceInsuranceComponent } from './admin-panel/service-insurance/service-insurance.component';
import { DashboardComponent } from './admin-panel/dashboard/dashboard.component';
import { VehicleInfoDetailsComponent } from './admin-panel/vehicle-info-details/vehicle-info-details.component';
import { LocalRowDataStorageService } from './service/local-data-storage.service';
import { FourCardSectionComponent } from './home/four-card-section/four-card-section.component';
import { TrendModule } from 'ngx-trend';
import { TripDetailsComponent } from './admin-panel/trip-details/trip-details.component';
import { AddNewVehicleComponent } from './admin-panel/add-new-vehicle/add-new-vehicle.component';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
{path: 'welcome', component: WelcomeComponent},
   {path: 'admin', component: AdminPanelComponent,
  children: [
     {path: 'dashboard', component: DashboardComponent},
     {path: 'vehicledetails', component: VehicleDetailsComponent},
     {path: 'vehicleinfodetails', component: VehicleInfoDetailsComponent },
     {path: 'chart', component: ChartComponent},
     {path: 'driver', component: DriverDetailsComponent},
     {path: 'terms', component: TermsComponent},
     {path: 'about', component: AboutusComponent },
     {path:'viewtrip', component: TripDetailsComponent},
     {path:'addvehicle', component: AddNewVehicleComponent}
  ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    AdminPanelComponent,
    VehicleDetailsComponent,
    TermsComponent,
    ChartComponent,
    WelcomeComponent,
    DriverDetailsComponent,
    ServiceInsuranceComponent,
    DashboardComponent,
    VehicleInfoDetailsComponent,
    FourCardSectionComponent,
    TripDetailsComponent,
    AddNewVehicleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatSortModule,
    NgwWowModule,
    RouterModule,
    MatCardModule,
    MatDatepickerModule,
    MatTableModule,
    CdkTableModule,
    MatSortModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    HighchartsChartModule,
    DemoMaterialModule,
    TrendModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [HttpClientService, LocalRowDataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
