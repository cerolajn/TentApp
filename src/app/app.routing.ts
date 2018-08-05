import { Routes } from '@angular/router';
import { LoadingPageComponent } from './main/loading-page/loading-page/loading-page.component';
import { StartPageComponent } from './main/start-page/start-page/start-page.component';
import { LoginPageComponent } from './main/login-page/login-page/login-page.component';
import { AboutPageComponent } from './main/about-page/about-page/about-page.component';
import { ContactPageComponent } from './main/contact-page/contact-page/contact-page.component';
import { RouterModule } from '@angular/router/src/router_module';
import { AddPlaceComponent } from './places/add_place_page/add-place/add-place.component';
import { FinalAddedPlaceComponent } from './places/final_added_place_page/final-added-place/final-added-place.component';
import { SearchPlaceComponent } from './places/search_place_page/search-place/search-place.component';
import { SearchResultComponent } from './places/search_result_page/search-result/search-result.component';
import { SelectedOffersComponent } from './places/selected_offers_page/selected-offers/selected-offers.component';
import { EmptySearchingResultsComponent } from './places/empty_searching_results_page/empty-searching-results/empty-searching-results.component';
import { Place } from './places/places.component';
import { BookFormPageComponent } from './places/book-form-page/book-form-page.component';
import { FinalBookedPageComponent } from './places/final-booked-page/final-booked-page.component';
import { UserComponent } from './user/user.component';
import { UserProfilePageComponent } from './user/user-profile-page/user-profile-page/user-profile-page.component';
import { UserNotLogPageComponent } from './main/login-page/user-not-log-page/user-not-log-page/user-not-log-page.component';
import { UserProfileSettingPageComponent } from './user/user-profile-setting-page/user-profile-setting-page/user-profile-setting-page.component';
import { UserBookedPlaceComponent } from './user/user-booked-place/user-booked-place/user-booked-place.component';
import { UserNoBookedPlacesComponent } from './user/user-no-booked-places/user-no-booked-places-/user-no-booked-places-.component';



const APP_ROUTES: Routes = [

  {path: '', component: 'LoadingPageComponent'},
  {path: 'start-page', component: 'StartPageComponent'},
  {path: 'login-page', component: 'LoginPageComponent'},
  {path: 'contact-page', component: 'ContactPageComponent'},
  {path: 'about-page', component: 'AboutPageComponent'},

  {path: 'add-place', component: 'AddPlaceComponent'},
  {path: 'book-form-page', component: 'BookFormPageComponent'},
  {path: 'empty_searching_result_page', component: 'EmptySearchingResultComponent'},
  {path: 'final_added_place-page', component: 'FinalAddedPlacePageComponent'},
  {path: 'final-booked-page', component: 'FinalBookedPageComponent'},
  {path: 'search_place_page', component: 'SearchPlaceComponent'},
  {path: 'search_result_page', component: 'SearchResultComponent'},
  {path: 'search_result_page/:id', component: 'SearchResultComponent'},
  {path: 'selected_offers_page/:id', component: 'SelectedOffersComponent'},

  {path: 'user-booked-place/:id', component: 'UserBookedPlaceComponent'},
  {path: 'user-no-booked-place', component: 'UserNoBookedPlaceComponent'},
  {path: 'user-profile-page/:id', component: 'UserProfilePageComponent'},
  {path: 'user-profile-setting-page/:id', component: 'UserProfileSettingComponent'},

];
export const routing = RouterModule.forRoot(APP_ROUTES);

