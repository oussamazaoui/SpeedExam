import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule, withFetch} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { HeroComponent } from './hero/hero.component';
import { FeatureComponent } from './feature/feature.component';
import { TeamComponent } from './team/team.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import {NgToastModule} from "ng-angular-popup";
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ResultsComponent } from './modules/user/components/results/results.component';
import { SettingsComponent } from './src/app/modules/user/components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HeroComponent,
    FeatureComponent,
    TeamComponent,
    NotFoundComponent,
    HomeComponent,
    ResultsComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // Add this line
    ToastrModule.forRoot(),
    NgToastModule,
    BrowserAnimationsModule,
    MatIconModule,

  ],
  providers: [
    provideClientHydration()
  ],
  exports: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
