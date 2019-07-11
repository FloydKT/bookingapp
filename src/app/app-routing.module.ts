import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ThingsComponent} from "./things/things.component";
import {EventsComponent} from "./events/events.component";
import {SportsComponent} from "./sports/sports.component";
import {FoodBeverageComponent} from "./food-beverage/food-beverage.component";
import {OffersComponent} from "./offers/offers.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {SignupComponent} from "./auth/signup/signup.component";

const routes: Routes = [
  {path: 'things', component: ThingsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'sports', component: SportsComponent},
  {path: 'food-beverage', component: FoodBeverageComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
