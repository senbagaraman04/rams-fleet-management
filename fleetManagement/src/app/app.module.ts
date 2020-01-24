import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router'


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
   { path: 'about', component: AboutusComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgwWowModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
