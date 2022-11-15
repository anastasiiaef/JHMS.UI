import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';





import { AngularFireModule } from "@angular/fire/compat";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,

    
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCZ30nJV86YNwb4tJugNk110dZenMffLBU",
      authDomain: "vernal-design-313916.firebaseapp.com",
      databaseURL: "https://vernal-design-313916-default-rtdb.firebaseio.com",
      projectId: "vernal-design-313916",
      storageBucket: "vernal-design-313916.appspot.com",
      messagingSenderId: "174449647637",
      appId: "1:174449647637:web:092bc08da262e4cd1d2e1c",
      measurementId: "G-81XNEJE3PG"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
