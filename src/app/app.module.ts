import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CigarComponent } from './cigar/cigar.component';
import { LiquorComponent } from './liquor/liquor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CigarComponent,
    LiquorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
