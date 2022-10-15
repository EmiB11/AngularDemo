import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePAgeComponent } from './pages/home-page/home-page.component';
import { LoginPAgeComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePAgeComponent,
    LoginPAgeComponent,
    NotFoundPageComponent,
    ContactPageComponent,
    ContactDetailPageComponent,
    LoginFormComponent,
    NombreCompletoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
     //Reactive Formularios:
     ReactiveFormsModule,
     //Modulo personalizado de Angular Material
     MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
