import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TimelineComponent } from './timeline/timeline.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalamarComponent } from './calamar/calamar.component';
import { PhoneSocialsComponent } from './phone-socials/phone-socials.component';
import { FixedImageComponent } from './fixed-image/fixed-image.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    TimelineComponent,
    HomeComponent,
    NavbarComponent,
    CalamarComponent,
    PhoneSocialsComponent,
    FixedImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
