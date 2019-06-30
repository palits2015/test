import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModulesModule } from './shared/material-modules/material-modules.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './reusable/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormsComponent } from './reusable/mat-forms/mat-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputComponent,
    MatFormsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModulesModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
