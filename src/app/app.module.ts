import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServComponent } from './componente/serv/serv.component';
import { CarouselComponent } from './componente/carousel/carousel.component';
import { NavbarComponent } from './componente/navbar/navbar.component';
import { NComponent } from './componente/n/n.component';

@NgModule({
  declarations: [
    AppComponent,
    ServComponent,
    CarouselComponent,
    NavbarComponent,
    NComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
