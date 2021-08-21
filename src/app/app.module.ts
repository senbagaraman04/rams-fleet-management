import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router';
import { NgVerticalTimelineModule  } from 'ng-vertical-timeline';
import {DemoMaterialModule} from './material-module';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { VehicleDetailsComponent } from './admin-panel/vehicle-details/vehicle-details.component';
import {MatTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {MatSortModule, MatDialogModule} from '@angular/material';
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatTableModule,
    MatSortModule,
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
