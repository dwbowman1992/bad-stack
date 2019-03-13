import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypewriterDirective } from './directives/typewriter.directive';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LandingComponent} from './views/landing/landing.component';
import { LandingHeaderComponent } from './views/landing/landing-header/landing-header.component';
import { LandingFooterComponent } from './views/landing/landing-footer/landing-footer.component';
import { DashboardNavbarComponent } from './views/dashboard/dashboard-navbar/dashboard-navbar.component';
import { UserComponent } from './views/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingComponent,
    TypewriterDirective,
    LandingHeaderComponent,
    LandingFooterComponent,
    DashboardNavbarComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
