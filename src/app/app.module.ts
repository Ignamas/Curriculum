import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalamarComponent } from './calamar/calamar.component';
import { PhoneSocialsComponent } from './phone-socials/phone-socials.component';
import { FixedImageComponent } from './fixed-image/fixed-image.component';
import { EducationComponent } from './education/education.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CertViewComponent } from './education/cert-view/cert-view.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent,
    NavbarComponent,
    CalamarComponent,
    PhoneSocialsComponent,
    FixedImageComponent,
    EducationComponent,
    CertViewComponent,
    ExperienceComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
