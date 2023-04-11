import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestingComponent } from './testing/testing.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BiriyaniSecComponent } from './biriyani-sec/biriyani-sec.component';
import { BestInTownComponent } from './best-in-town/best-in-town.component';
import { ChineseCuisineComponent } from './chinese-cuisine/chinese-cuisine.component';
import { DealOfDayComponent } from './deal-of-day/deal-of-day.component';
import { SweetsSecComponent } from './sweets-sec/sweets-sec.component';
import { TreatsTopratedComponent } from './treats-toprated/treats-toprated.component';
import { AngularFireModule } from'@angular/fire/compat'
import { environment } from 'src/environments/environment.prod';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { VerificationComponent } from './verification/verification.component';
import { AuthenticationService } from './servic/authentication.service';
import { AuthGGuard } from './servic/auth-g.guard';
import { PaginatorModule } from 'primeng/paginator';

import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
} from "ngx-ui-loader";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "red",
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};




@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    CartComponent,
    BiriyaniSecComponent,
    BestInTownComponent,
    ChineseCuisineComponent,
    DealOfDayComponent,
    SweetsSecComponent,
    TreatsTopratedComponent,
    LoginComponent,
    HeaderComponent,
    VerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    PaginatorModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),

  ],
  providers: [AuthenticationService,AuthGGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
