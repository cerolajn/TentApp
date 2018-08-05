import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddPlaceComponent } from './places/add_place_page/add-place/add-place.component';
import { FinalAddedPlaceComponent } from './places/final_added_place_page/final-added-place/final-added-place.component';
import { SearchPlaceComponent } from './places/search_place_page/search-place/search-place.component';
import { SearchResultComponent } from './places/search_result_page/search-result/search-result.component';
import { SelectedOffersComponent } from './places/selected_offers_page/selected-offers/selected-offers.component';
import { EmptySearchingResultsComponent } from './places/empty_searching_results_page/empty-searching-results/empty-searching-results.component';
import { Place } from './places/places.component';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { BookFormPageComponent } from './places/book-form-page/book-form-page.component';
import { FinalBookedPageComponent } from './places/final-booked-page/final-booked-page.component';
import { UserComponent } from './user/user.component';
import { MainComponent } from './main/main.component';
import { AboutPageComponent } from './main/about-page/about-page/about-page.component';
import { ContactPageComponent } from './main/contact-page/contact-page/contact-page.component';
import { StartPageComponent } from './main/start-page/start-page/start-page.component';
import { UserProfilePageComponent } from './user/user-profile-page/user-profile-page/user-profile-page.component';
import { UserNotLogPageComponent } from './main/login-page/user-not-log-page/user-not-log-page/user-not-log-page.component';
import { UserProfileSettingPageComponent } from './user/user-profile-setting-page/user-profile-setting-page/user-profile-setting-page.component';
import { UserBookedPlaceComponent } from './user/user-booked-place/user-booked-place/user-booked-place.component';
import { UserNoBookedPlacesComponent } from './user/user-no-booked-places/user-no-booked-places-/user-no-booked-places-.component';
import { LoadingPageComponent } from './main/loading-page/loading-page/loading-page.component';
import { LoginPageComponent } from './main/login-page/login-page/login-page.component';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { routing} from "./app.routing";
import { RouterModule } from '@angular/router';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("Facebook-App-Id")
  }
]);



@NgModule({
  declarations: [
    AppComponent,
    AddPlaceComponent,
    FinalAddedPlaceComponent,
    SearchPlaceComponent,
    SearchResultComponent,
    SelectedOffersComponent,
    EmptySearchingResultsComponent,
    Place,
    BookFormPageComponent,
    FinalBookedPageComponent,
    UserComponent,
    MainComponent,
    AboutPageComponent,
    ContactPageComponent,
    StartPageComponent,
    UserProfilePageComponent,
    UserNotLogPageComponent,
    UserProfileSettingPageComponent,
    UserBookedPlaceComponent,
    UserNoBookedPlacesComponent,
    LoadingPageComponent,
    LoginPageComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SocialLoginModule.initialize(config),
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
