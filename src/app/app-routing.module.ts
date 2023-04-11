import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingComponent } from './testing/testing.component';
import { CartComponent } from './cart/cart.component';
import { BiriyaniSecComponent } from './biriyani-sec/biriyani-sec.component';
import { BestInTownComponent } from './best-in-town/best-in-town.component';
import { ChineseCuisineComponent } from './chinese-cuisine/chinese-cuisine.component';
import { DealOfDayComponent } from './deal-of-day/deal-of-day.component';
import { SweetsSecComponent } from './sweets-sec/sweets-sec.component';
import { TreatsTopratedComponent } from './treats-toprated/treats-toprated.component';
import { LoginComponent } from './login/login.component';
import { VerificationComponent } from './verification/verification.component';
import { AuthGGuard } from './servic/auth-g.guard';


const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'relogin', component:LoginComponent},
  {path:'register', component:LoginComponent},
  {path:'forgotPassword', component:LoginComponent},
  {path:'verification', component:VerificationComponent},
  {path:'home', component:TestingComponent, canActivate:[AuthGGuard]},
  {path:'cart', component: CartComponent, canActivate:[AuthGGuard]},
  {path:'biriyani', component: BiriyaniSecComponent, canActivate:[AuthGGuard]},
  {path:'best-in-town', component:BestInTownComponent, canActivate:[AuthGGuard]},
  {path:'chinese-cuisine', component:ChineseCuisineComponent, canActivate:[AuthGGuard]},
  {path:'deals-of-day', component:DealOfDayComponent, canActivate:[AuthGGuard]},
  {path:'sweets', component:SweetsSecComponent, canActivate:[AuthGGuard]},
  {path:'treats-Top-Rated', component:TreatsTopratedComponent, canActivate:[AuthGGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
