import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule} from "./material.module";
import { ThingsComponent } from './things/things.component';
import { PlacesComponent } from './things/places/places.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { RestaurantComponent } from './food-beverage/restaurant/restaurant.component';
import { BarsComponent } from './food-beverage/bars/bars.component';
import { EventsComponent } from './events/events.component';
import { SpaMassageComponent } from './events/spa-massage/spa-massage.component';
import { PartiesDancingComponent } from './events/parties-dancing/parties-dancing.component';
import { SportsComponent } from './sports/sports.component';
import { BasketballComponent } from './sports/basketball/basketball.component';
import { RunningComponent } from './sports/running/running.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    ThingsComponent,
    PlacesComponent,
    FoodBeverageComponent,
    RestaurantComponent,
    BarsComponent,
    EventsComponent,
    SpaMassageComponent,
    PartiesDancingComponent,
    SportsComponent,
    BasketballComponent,
    RunningComponent,
    OffersComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
