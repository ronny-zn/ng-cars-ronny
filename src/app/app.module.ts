import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import for loading & configuring in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarItemComponent } from './car-item/car-item.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarService } from './shared/car.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarData } from './shared/car-data';
import { HttpClientModule } from '@angular/common/http';
import { CarNewComponent } from './car-new/car-new.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    CarItemComponent,
    CarDetailComponent,
    CarEditComponent,
    CarNewComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(CarData)
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
