import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './crud/home/home.component';
import { DetailsComponent } from './crud/details/details.component';
import { CreateComponent } from './crud/create/create.component';
import { UpdateComponent } from './crud/update/update.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    SlimLoadingBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
